import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceOrigin = "https://tronhouse.com";
const outputRoot = path.resolve("public/assets/tronhouse");
const manifestPath = path.resolve("src/data/tronhouseAssetManifest.json");

const pages = [
  { name: "home", url: "https://tronhouse.com/" },
  { name: "services", url: "https://tronhouse.com/tron-services" },
  { name: "about", url: "https://tronhouse.com/about-tron" },
  { name: "credential", url: "https://tronhouse.com/tron-credential" },
  { name: "blog", url: "https://tronhouse.com/blog" },
  { name: "contact", url: "https://tronhouse.com/contact" },
];

const assetExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".mp4",
  ".png",
  ".svg",
  ".webm",
  ".webp",
]);

const firstPartyHosts = new Set(["tronhouse.com", "www.tronhouse.com"]);

const toAbsoluteUrl = (rawUrl, pageUrl) => {
  const trimmedUrl = rawUrl.trim().replace(/^["']|["']$/g, "");

  if (trimmedUrl.startsWith("data:") || trimmedUrl.startsWith("mailto:")) {
    return null;
  }

  if (trimmedUrl.startsWith("//")) {
    return `https:${trimmedUrl}`;
  }

  try {
    return new URL(trimmedUrl, pageUrl).toString();
  } catch {
    return null;
  }
};

const hasAssetExtension = (url) => {
  const parsedUrl = new URL(url);
  return assetExtensions.has(path.extname(parsedUrl.pathname).toLowerCase());
};

const extractAssetUrls = (html, pageUrl) => {
  const urls = new Set();
  const attrPattern =
    /\b(?:src|href|data-src|data-original|data-bg|poster)=["']([^"']+)["']/gi;
  const cssUrlPattern = /url\(([^)]+)\)/gi;

  for (const match of html.matchAll(attrPattern)) {
    const absoluteUrl = toAbsoluteUrl(match[1], pageUrl);
    if (absoluteUrl && hasAssetExtension(absoluteUrl)) {
      urls.add(absoluteUrl);
    }
  }

  for (const match of html.matchAll(cssUrlPattern)) {
    const absoluteUrl = toAbsoluteUrl(match[1], pageUrl);
    if (absoluteUrl && hasAssetExtension(absoluteUrl)) {
      urls.add(absoluteUrl);
    }
  }

  return Array.from(urls);
};

const extensionFromResponse = (assetUrl, contentType) => {
  const parsedUrl = new URL(assetUrl);
  const pathnameExtension = path.extname(parsedUrl.pathname).toLowerCase();

  if (assetExtensions.has(pathnameExtension)) {
    return pathnameExtension;
  }

  if (contentType.includes("image/jpeg")) {
    return ".jpg";
  }

  if (contentType.includes("image/png")) {
    return ".png";
  }

  if (contentType.includes("image/gif")) {
    return ".gif";
  }

  if (contentType.includes("image/webp")) {
    return ".webp";
  }

  if (contentType.includes("video/mp4")) {
    return ".mp4";
  }

  return ".bin";
};

const filenameForAsset = (assetUrl, contentType) => {
  const parsedUrl = new URL(assetUrl);
  const hash = createHash("sha1").update(assetUrl).digest("hex").slice(0, 10);
  const basename = path.basename(parsedUrl.pathname, path.extname(parsedUrl.pathname));
  const decodedName = decodeURIComponent(basename)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  const readableName = decodedName || "asset";

  return `${readableName}-${hash}${extensionFromResponse(assetUrl, contentType)}`;
};

const fetchText = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.text();
};

const downloadAsset = async (assetUrl, pageName) => {
  const parsedUrl = new URL(assetUrl);

  if (!firstPartyHosts.has(parsedUrl.hostname)) {
    return {
      originalUrl: assetUrl,
      pageName,
      skipped: true,
      reason: `External host: ${parsedUrl.hostname}`,
    };
  }

  const response = await fetch(assetUrl);

  if (!response.ok) {
    return {
      originalUrl: assetUrl,
      pageName,
      skipped: true,
      reason: `HTTP ${response.status}`,
    };
  }

  const contentType = response.headers.get("content-type") ?? "application/octet-stream";
  const bytes = Buffer.from(await response.arrayBuffer());
  const filename = filenameForAsset(assetUrl, contentType);
  const pageOutputRoot = path.join(outputRoot, pageName);
  const absolutePath = path.join(pageOutputRoot, filename);
  const publicPath = `/assets/tronhouse/${pageName}/${filename}`;

  await mkdir(pageOutputRoot, { recursive: true });
  await writeFile(absolutePath, bytes);

  return {
    originalUrl: assetUrl,
    pageName,
    publicPath,
    contentType,
    bytes: bytes.length,
    skipped: false,
  };
};

const collectAssets = async () => {
  await mkdir(outputRoot, { recursive: true });
  await mkdir(path.dirname(manifestPath), { recursive: true });

  const byUrl = new Map();

  for (const page of pages) {
    const html = await fetchText(page.url);
    const urls = extractAssetUrls(html, page.url);

    for (const assetUrl of urls) {
      const existingEntry = byUrl.get(assetUrl);

      if (existingEntry) {
        existingEntry.pageNames.push(page.name);
      } else {
        byUrl.set(assetUrl, {
          originalUrl: assetUrl,
          pageNames: [page.name],
          firstPageName: page.name,
        });
      }
    }
  }

  const assets = [];

  for (const entry of byUrl.values()) {
    const asset = await downloadAsset(entry.originalUrl, entry.firstPageName);

    assets.push({
      ...asset,
      pageNames: entry.pageNames,
    });
  }

  const manifest = {
    sourceOrigin,
    collectedAt: new Date().toISOString(),
    pages,
    assets,
  };

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  const downloadedCount = assets.filter((asset) => !asset.skipped).length;
  const skippedCount = assets.length - downloadedCount;

  console.log(`Downloaded ${downloadedCount} assets. Skipped ${skippedCount}.`);
  console.log(`Manifest: ${manifestPath}`);
};

collectAssets().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
