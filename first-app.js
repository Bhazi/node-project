var http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>From server</title></head>");
  res.write("<body><h1>Basim</h1>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
