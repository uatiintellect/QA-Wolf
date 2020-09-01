const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch({slowMo: 20,
  });
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("myTest2", async () => {
  await page.goto("https://www.premierortho.com/");
  await page.click('#menu-main-menu-1 [href="https://www.premierortho.com/physicaltherapy/"]');
  await page.click('#menu-main-menu-1 [href="https://www.premierortho.com/specialties/"]');
});