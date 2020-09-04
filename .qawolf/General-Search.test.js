const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch({slowMo: 200,
  });
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("General-Search", async () => {
  await page.goto("https://www.premierortho.com/");
  await page.click(".header-search");
  await page.click("input");
  await page.fill("input", "Jeffrey Citara, D.O.");
  await page.press("input", "Enter");
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
});