// https status code info, visit developer.rozila.org
const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync(
  './smilga-node-express/02-express-tutorial/navbar-app/index.html',
);
const homeStyles = readFileSync(
  './smilga-node-express/02-express-tutorial/navbar-app/styles.css',
);
const homeImage = readFileSync(
  './smilga-node-express/02-express-tutorial/navbar-app/logo.svg',
);
const homeLogic = readFileSync(
  './smilga-node-express/02-express-tutorial/navbar-app/browser-app.js',
);

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  console.log(url);
  // home page
  if (url === '/') {
    console.log(`URL: ${req.url}`);
    console.log(`Method: ${req.method}`);
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  }
  // styles
  else if (url === '/styles.css') {
    console.log(`URL: ${req.url}`);
    console.log(`Method: ${req.method}`);
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyles);
    res.end();
  }
  // image/logo
  else if (url === '/logo.svg') {
    console.log(`URL: ${req.url}`);
    console.log(`Method: ${req.method}`);
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeImage);
    res.end();
  }
  // logic
  else if (url === '/browser-app.js') {
    console.log(`URL: ${req.url}`);
    console.log(`Method: ${req.method}`);
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic);
    res.end();
  }

  // 404
  else {
    console.log(`URL: ${req.url}`);
    console.log(`Method: ${req.method}`);
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>page not found</h1>');
    res.end();
  }
});

server.listen(5000);
