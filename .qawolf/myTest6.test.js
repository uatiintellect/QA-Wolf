const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch({slowMo: 100,
  });
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("myTest6", async () => {
  await page.goto("https://www.premierortho.com/");
  await page.click(".crossImage");
  await qawolf.scroll(page, "html", { x: 0, y: 1427 });
  await page.click(".btn-blue");
  await page.selectOption(".searchDisable", "Knee");
  await page.click("text=SEARCH");
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
});