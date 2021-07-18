const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.reddit.com/r/wallstreetbets');
  // other actions...

  // probably need to login to reddit

  // scrapew most talked about tickers

  // any title with $xxx will be considered

  // setup db to store most mentioned tickers
})();