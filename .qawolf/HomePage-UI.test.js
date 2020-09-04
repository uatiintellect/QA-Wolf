const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch({slowMo: 500, });
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("HomePage-UI", async () => {
  await page.goto("https://www.premierortho.com/");
  await page.click(".crossImage");
  await qawolf.scroll(page, "html", { x: 0, y: 3579 });
  await page.click(".back-to-top");
});