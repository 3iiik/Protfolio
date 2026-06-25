import puppeteer from "puppeteer";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public", "images", "projects");
mkdirSync(publicDir, { recursive: true });

const sites = [
  { url: "https://le-jardin-restaurant.vercel.app", name: "le-jardin" },
  { url: "https://atlas-fitness-club.vercel.app", name: "atlas-fitness" },
  { url: "https://smilecare-dental-indol.vercel.app", name: "smilecare-dental" },
];

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const site of sites) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(site.url, { waitUntil: "networkidle2", timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({
    path: join(publicDir, `${site.name}.jpg`),
    fullPage: true,
    type: "jpeg",
    quality: 85,
  });
  console.log(`Screenshot saved: ${site.name}.jpg`);
  await page.close();
}

await browser.close();
console.log("All screenshots taken!");
