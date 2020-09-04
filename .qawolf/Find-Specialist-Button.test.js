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

test("Find-Specialist-Button", async () => {
  await page.goto("https://www.premierortho.com/");
  await qawolf.scroll(page, "html", { x: 0, y: 405 });
  await page.click(".react-parallax-content .btn");
});