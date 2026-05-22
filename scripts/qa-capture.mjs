import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import {
  captureDelayMs,
  getLocalUrl,
  getSourceUrl,
  localOrigin,
  localServerPort,
  qaOutputRoot,
  qaPages,
  viewports,
} from "./qa-config.mjs";

const target = process.argv[2];
const validTargets = new Set(["source", "local"]);

if (!validTargets.has(target)) {
  console.error("Usage: node scripts/qa-capture.mjs <source|local>");
  process.exit(1);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const isReachable = async (url) => {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(2000) });
    return response.ok;
  } catch {
    return false;
  }
};

const waitForServer = async (url) => {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    if (await isReachable(url)) {
      return;
    }

    await sleep(500);
  }

  throw new Error(`Local server did not become reachable: ${url}`);
};

const startLocalServer = async () => {
  if (await isReachable(localOrigin)) {
    return null;
  }

  const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
  const child = spawn(
    npmCommand,
    ["run", "dev", "--", "--host", "127.0.0.1", "--port", String(localServerPort)],
    {
      cwd: process.cwd(),
      stdio: "ignore",
      detached: process.platform !== "win32",
    },
  );

  await waitForServer(localOrigin);

  return child;
};

const stopLocalServer = (child) => {
  if (!child) {
    return;
  }

  if (process.platform === "win32") {
    spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" });
    return;
  }

  process.kill(-child.pid, "SIGTERM");
};

const createBrowser = async () => {
  try {
    return await chromium.launch({ channel: "chrome", headless: true });
  } catch {
    return chromium.launch({ headless: true });
  }
};

const gotoWithRetry = async (page, url) => {
  let lastError = null;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
      return;
    } catch (error) {
      lastError = error;
      console.warn(`Navigation failed (${attempt}/3): ${url}`);
      await sleep(attempt * 1200);
    }
  }

  throw lastError ?? new Error(`Navigation failed: ${url}`);
};

const dismissSourceWidgets = async (page) => {
  await page.addStyleTag({
    content: `
      iframe,
      [class*="zalo" i],
      [id*="zalo" i],
      [class*="whatsapp" i],
      [id*="whatsapp" i],
      #chatBubble,
      #wa-btn-wrapper,
      #wa_btn-content,
      #crmWebToEntityFormContainer,
      #thankYouMessage,
      .zalo-chat-widget,
      .fb_dialog,
      .fb-customerchat {
        display: none !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `,
  });
};

const capturePage = async (browser, pageConfig, viewport) => {
  const screenshotDir = path.join(qaOutputRoot, target, viewport.id);
  const videoDir = path.join(qaOutputRoot, target, "videos", viewport.id);
  const screenshotPath = path.join(screenshotDir, `${pageConfig.id}.png`);

  await mkdir(screenshotDir, { recursive: true });
  await mkdir(videoDir, { recursive: true });

  const screenshotContext = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
  });
  const screenshotPage = await screenshotContext.newPage();
  const url = target === "source" ? getSourceUrl(pageConfig) : getLocalUrl(pageConfig, "vi");

  await gotoWithRetry(screenshotPage, url);

  if (target === "source") {
    await dismissSourceWidgets(screenshotPage);
  }

  await screenshotPage.waitForTimeout(captureDelayMs);
  await screenshotPage.screenshot({ path: screenshotPath, fullPage: false, animations: "allow" });
  await screenshotContext.close();

  const videoContext = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
    recordVideo: {
      dir: videoDir,
      size: { width: viewport.width, height: viewport.height },
    },
  });
  const page = await videoContext.newPage();

  await gotoWithRetry(page, url);

  if (target === "source") {
    await dismissSourceWidgets(page);
  }

  await page.waitForTimeout(captureDelayMs);
  await page.evaluate(() => window.scrollTo({ top: Math.round(window.innerHeight * 0.72), behavior: "smooth" }));
  await page.waitForTimeout(1200);
  await page.evaluate(() => window.scrollTo({ top: Math.round(window.innerHeight * 1.45), behavior: "smooth" }));
  await page.waitForTimeout(1200);
  await videoContext.close();

  return { url, screenshotPath };
};

const capture = async () => {
  const localServer = target === "local" ? await startLocalServer() : null;
  const browser = await createBrowser();
  const results = [];

  try {
    const pagesForTarget = target === "source" ? qaPages.filter((pageConfig) => pageConfig.sourcePath) : qaPages;

    for (const viewport of viewports) {
      for (const pageConfig of pagesForTarget) {
        const result = await capturePage(browser, pageConfig, viewport);
        results.push({ viewport: viewport.id, page: pageConfig.id, ...result });
        console.log(`${target}:${viewport.id}:${pageConfig.id}`);
      }
    }
  } finally {
    await browser.close();
    stopLocalServer(localServer);
  }

  console.log(`Captured ${results.length} ${target} screenshots into ${path.join(qaOutputRoot, target)}.`);
};

capture().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
