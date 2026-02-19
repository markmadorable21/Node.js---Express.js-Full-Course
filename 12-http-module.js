const http = require('http');

//req = request, res =response
const server = http.createServer((req, res) => {
  // res.write('Welcome to out home page');
  // res.end();
  // console.log(req);

  if (req.url === '/') {
    res.end('Welcum to our home page');
  }
  if (req.url === '/about') {
    res.end('Here is our history');
  }
  res.end(
    `<h1>Oops!</h1><p>We can't seem to find the page you're looking for.</p><a href="/">back home</a>`,
  );
});

server.listen(5000);
