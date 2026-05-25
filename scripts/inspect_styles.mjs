import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 800 },
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"
  });
  const page = await context.newPage();
  
  console.log("Navigating to live site on mobile...");
  await page.goto("https://tronhouse.com/", { waitUntil: "domcontentloaded" });
  
  // Wait for the menu trigger to be present
  await page.waitForSelector(".cd-nav-trigger");

  const triggerStyles = await page.evaluate(() => {
    const el = document.querySelector(".cd-nav-trigger");
    const span = el ? el.querySelector("span") : null;
    if (!el) return null;
    const style = window.getComputedStyle(el);
    const spanStyle = span ? window.getComputedStyle(span) : null;
    
    return {
      trigger: {
        width: style.width,
        height: style.height,
        position: style.position,
        display: style.display,
        right: style.right,
        top: style.top,
        backgroundColor: style.backgroundColor,
      },
      span: spanStyle ? {
        width: spanStyle.width,
        height: spanStyle.height,
        backgroundColor: spanStyle.backgroundColor,
        position: spanStyle.position,
        top: spanStyle.top,
        left: spanStyle.left,
        margin: spanStyle.margin,
      } : null
    };
  });
  console.log("Mobile Trigger Styles:", JSON.stringify(triggerStyles, null, 2));

  await browser.close();
}

run().catch(console.error);
