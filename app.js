// https status code info, visit developer.rozila.org
const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  // home page
  if (url === '/') {
    console.log(`URL: ${req.url}`);
    console.log(`Method: ${req.method}`);
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>home page1</h1>');
    res.end();
  }
  // about page
  else if (url === '/about') {
    console.log(`URL: ${req.url}`);
    console.log(`Method: ${req.method}`);
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about page</h1>');
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
