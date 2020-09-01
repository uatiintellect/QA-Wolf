const qawolf = require("qawolf");
const { waitFor } = require("qawolf/build/utils");

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

test("myTest", async () => {
  await page.goto("http://todomvc.com/examples/react");
  await page.click("html");
  await page.click(".new-todo");
  await page.fill(".new-todo", "It needs to be done");
  await page.press(".new-todo", "Enter");
  await page.click(".toggle");
  await page.fill(".new-todo", "Sometimes ");
  await page.fill(".new-todo", "Test to check");
});