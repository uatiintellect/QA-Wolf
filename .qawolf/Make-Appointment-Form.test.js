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

test("Make-Appointment-Form", async () => {
  await page.goto("https://www.premierortho.com/");
  await page.click(".btn-purple");
  await page.click(".btn-purple");
  await page.click(".btn-purple");
  await page.click('[href="/appointment"]');
  await qawolf.scroll(page, "html", { x: 0, y: 467 });
  await page.click('[placeholder="First Name "]');
  await page.fill('[placeholder="First Name "]', "Muhammad");
  await page.press('[placeholder="First Name "]', "Tab");
  await page.fill('[placeholder="Last Name "]', "Sheharyar");
  await page.press('[placeholder="Last Name "]', "Tab");
  await page.fill('[placeholder="Email "]', "msheryyar572@gmail.com");
  await page.press('[placeholder="Email "]', "Tab");
  await page.fill('[placeholder="Phone Number "]', "03227691339");
  await qawolf.scroll(page, "html", { x: 0, y: 620 });
  await page.click('[placeholder="Zip "]');
  await qawolf.scroll(page, "html", { x: 0, y: 621 });
  await qawolf.scroll(page, "html", { x: 0, y: 624 });
  await qawolf.scroll(page, "html", { x: 0, y: 631 });
  await page.fill('[placeholder="Zip "]', "37496");
  await qawolf.scroll(page, "html", { x: 0, y: 797 });
  await page.click(".check-container");
  await page.click("text=Lapiplasty");
  await page.click("text=Knee");
  await page.click("text=Rheumatology");
  await page.click("text=Spine");
  await page.click("text=Lapiplasty");
  await page.click('text="Non-Operative Rehabilitation"');
  await qawolf.scroll(page, "html", { x: 0, y: 1243 });
  await page.click("textarea");
  await qawolf.scroll(page, "html", { x: 0, y: 1133 });
  await page.fill("textarea", "Test");
  await qawolf.scroll(page, "html", { x: 0, y: 1585 });
  await page.click('text="Yes, I would like to receive email updates"');
  await page.selectOption("select", "Athletic Trainer");
  await page.click(".nomination-btn");
  await qawolf.scroll(page, "html", { x: 0, y: 394 });
  await page.click("text=Link");
  await qawolf.scroll(page, "html", { x: 0, y: 723 });
});