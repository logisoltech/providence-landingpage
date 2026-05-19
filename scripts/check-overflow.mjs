import { chromium } from "playwright";

const widths = [375, 768, 1024, 1100, 1200, 1280, 1366, 1440, 1920];
const url = process.env.URL || "http://localhost:3000";

const browser = await chromium.launch();
const page = await browser.newPage();

for (const w of widths) {
  await page.setViewportSize({ width: w, height: 900 });
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2500);

  const offenders = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const out = [];
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width < 1) continue;
      const left = Math.round(r.left);
      const right = Math.round(r.right);
      if (left < -1 || right > vw + 1) {
        const cs = getComputedStyle(el);
        out.push({
          tag: el.tagName.toLowerCase(),
          class: el.className?.toString?.().slice(0, 80) || "",
          left,
          right,
          width: Math.round(r.width),
          vw,
          overflow: cs.overflow,
          position: cs.position,
        });
      }
    }
    out.sort((a, b) => b.right - a.right - (a.right - a.left));
    return out.slice(0, 12);
  });

  const scrollW = await page.evaluate(
    () => document.documentElement.scrollWidth
  );
  const clientW = await page.evaluate(
    () => document.documentElement.clientWidth
  );

  console.log(`\n=== ${w}px scrollWidth=${scrollW} clientWidth=${clientW} ===`);
  if (scrollW > clientW) {
    console.log("OVERFLOW");
    console.log(JSON.stringify(offenders, null, 2));
  } else {
    console.log("OK");
  }
}

await browser.close();
