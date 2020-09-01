const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch({
    slowMo: 50,
  });
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("myTest5", async () => {
  await page.goto("https://tuk-website-fe-next.vercel.app/");
  await qawolf.scroll(page, "html", { x: 0, y: 1676 });
  await page.click(".sm\:w-auto");
  await page.click('.hidden [href="/"]');
  await page.click(".rounded");
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
  await page.click('.hidden [href="/"]');
  await page.click('text="view templates"');
  await qawolf.scroll(page, "html", { x: 0, y: 0 });
  await page.click('.hidden [href="/"]');
  await qawolf.scroll(page, "html", { x: 0, y: 6461 });
  await page.click('text="See Pricing"');
  await page.click('.hidden [href="/"]');
  await qawolf.scroll(page, "html", { x: 0, y: 6461 });
  await page.click('text="Explore Components"');
});