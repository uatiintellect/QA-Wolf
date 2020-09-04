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

test("Cross-Popup", async () => {
  await page.goto("https://www.premierortho.com/");
  await page.click(".crossImage");
});