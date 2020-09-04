const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch({slowMo: 500,
  });
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("Navigation", async () => {
  await page.goto("https://www.premierortho.com/");
  await page.click("text=PHYSICIANS");
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
  await page.click("text=LOCATIONS");
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
  await page.click("li:nth-of-type(3) .n-text-prop-new");
  await page.click("text=SPECIALTIES");
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
  await page.click('text="PHYSICAL THERAPY"');
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
  await page.click('text="PATIENT RESOURCES"');
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
  await page.click("li:nth-of-type(6) .n-text-prop-new");
  await page.click("text=CAREERS");
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
});