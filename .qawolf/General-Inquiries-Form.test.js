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

test("General-Inquiries-Form", async () => {
  await page.goto("https://www.premierortho.com/");
  await page.click('[href="/appointment"]');
  await page.click('[href="/general-inquiries"]');
  await qawolf.scroll(page, "html", { x: 0, y: 380 });
  await page.click('[placeholder="First Name "]');
  await page.fill('[placeholder="First Name "]', "Muhammad");
  await page.press('[placeholder="First Name "]', "Tab");
  await page.fill('[placeholder="Last Name "]', "Sheharyar");
  await page.press('[placeholder="Last Name "]', "Tab");
  await page.fill('[placeholder="Email "]', "msheryyar572@gmail.com");
  await page.press('[placeholder="Email "]', "Tab");
  await page.fill('[placeholder="Phone Number "]', "03227691339");
  await qawolf.scroll(page, "html", { x: 0, y: 579 });
  await page.click("textarea");
  await qawolf.scroll(page, "html", { x: 0, y: 646 });
  await page.fill("textarea", "Test");
  await qawolf.scroll(page, "html", { x: 0, y: 1086 });
  await page.click(".check-container");
  await page.selectOption("select", "Internet Search");
  await page.click(".nomination-btn");
  await qawolf.scroll(page, "html", { x: 0, y: 255 });
});