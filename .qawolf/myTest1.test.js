const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("myTest1", async () => {
  await page.goto("https://www.premierortho.com/");
  await qawolf.scroll(page, "html", { x: 0, y: 5 });
  await page.click(".crossImage");
  await page.click('#menu-main-menu-1 [href="https://www.premierortho.com/specialties/arthroscopy/"]');
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
  await page.click('#menu-main-menu-1 [href="https://www.premierortho.com/locations/"]');
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
});