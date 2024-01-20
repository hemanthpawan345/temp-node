const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.end("Welcome to home page");
    }
    if (req.url === "/about") {
      res.end("Here is some short story about our history");
    }
  res.end('404 not found ');
});

server.listen(3000);
