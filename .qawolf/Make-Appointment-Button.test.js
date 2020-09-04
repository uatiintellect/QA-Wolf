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

test("Make-Appointment-Button", async () => {
  await page.goto("https://www.premierortho.com/");
  await page.click('[href="/appointment"]');
  await qawolf.scroll(page, "html", { x: 0, y: 222 });
  await page.click('[href="/general-inquiries"]');
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
});