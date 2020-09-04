const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch({slowMo: 500,});
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("Physicians-Page", async () => {
  await page.goto("https://www.premierortho.com/");
  await page.click(".crossImage");
  await page.click("text=PHYSICIANS");
  await page.click(".flex-col-button .flex-col-button div div");
  await page.click(".flex-col-button .flex-col-button div div");
  await page.click("#detail-page-zip");
  await page.fill("#detail-page-zip", "19341");
  await page.selectOption(".btn-lg", "5");
  await page.click(".btn-orange");
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
});