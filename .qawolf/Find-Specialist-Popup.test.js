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

test("Find-Specialist-Popup", async () => {
  await page.goto("https://www.premierortho.com/");
  await page.click(".btn-blue");
  await page.selectOption(".searchDisable", "Foot And Ankle");
  await page.click(".quantity");
  await page.fill(".quantity", "73500");
  await page.selectOption(".searchDisable", "15");
  await page.click("text=SEARCH");
  await page.click(".close-img");
});