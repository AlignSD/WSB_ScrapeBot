const puppeteer = require('puppeteer');


puppeteer.launch({ headless: true, args: ['--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'] }).then(async browser => {

  const page = await browser.newPage();
  await page.goto("https://www.reddit.com/r/wallstreetbets/hot");
  await page.waitForSelector('body');

    var rposts = await page.evaluate(() => {
        let posts = document.body.querySelectorAll('.Post');
        postItems = [];

        posts.forEach((item) => {
          let title = item.querySelector('h3').innerText;
          // console.log('title')
          let votes = item.querySelector('[id*=upvote-button] div').innerText;
          // let comments = item.querySelector('.icon-comment span').innerText;
          // let link = item.querySelector('a').href;
          let description = ''
          try{
            description = item.querySelector('p').innerText;
          }catch(e) {

          }

          //postItems.push({title: title, votes: votes, comments: comments, link: link, description: description})
          postItems.push({title: title, votes: votes, description: description})

        })
        
        var items = {
          "posts": postItems
        };

        return items;
    });

    console.log(rposts);
    await browser.close();

}).catch(function(error) {
    console.error(error);
});
  // probably need to login to reddit

  // scrape most talked about tickers

  // if post is not already in db scrape it

  // posts on reddit use an h3 for post titles

  // any title with $xxx will be considered

  // setup db to store most mentioned tickers