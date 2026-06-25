import puppeteer from "puppeteer";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public", "images", "projects");
mkdirSync(publicDir, { recursive: true });

const sites = [
  {
    url: "https://le-jardin-restaurant.vercel.app",
    name: "le-jardin",
    waitFor: "#hero",
  },
  {
    url: "https://atlas-fitness-club.vercel.app",
    name: "atlas-fitness",
    waitFor: "#hero",
  },
  {
    url: "https://smilecare-dental-indol.vercel.app",
    name: "smilecare-dental",
    waitFor: "#hero",
  },
];

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const site of sites) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  await page.goto(site.url, { waitUntil: "networkidle2", timeout: 45000 });

  // Wait for hero section to be visible
  try {
    await page.waitForSelector(site.waitFor, { timeout: 10000 });
  } catch {
    console.log(`Warning: ${site.waitFor} not found on ${site.name}, proceeding anyway`);
  }

  // Extra settle time for fonts, images, animations
  await new Promise((r) => setTimeout(r, 3000));

  // Capture viewport only (hero section) — NOT full page
  // 1280x800 gives a clean hero shot with nav bar
  await page.screenshot({
    path: join(publicDir, `${site.name}.jpg`),
    fullPage: false,
    type: "jpeg",
    quality: 90,
  });

  console.log(`Screenshot saved: ${site.name}.jpg (1280x800, viewport only)`);
  await page.close();
}

await browser.close();
console.log("All screenshots taken!");
