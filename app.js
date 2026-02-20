// const http = require('http')

// const server = http.createServer((req, res) => {
//   console.log('request event')
//   res.end('Hello World')
// })

// server.listen(5000, () => {
//   console.log('Server listening on port : 5000....')
// })

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcum to our home page');
    return;
  }

  if (req.url === '/about') {
    // Blocking code that will gonna be offloaded
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end('Here is our history');
    return;
  }

  // Default 404 response
  res.end(
    `<h1>Oops!</h1><p>We can't seem to find the page you're looking for.</p><a href="/">back home</a>`,
  );
});

server.listen(5000, () => {
  console.log('Server listening on port : 5000....');
});
