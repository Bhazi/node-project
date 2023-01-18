var http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  if (url == "/home") {
    res.write("<html>");
    res.write("<head><title>From server</title></head>");
    res.write("<body><h1>Welcome home</h1>");
    res.write("</html>");
    res.end();
  } else if (url == "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>From server</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1>");
    res.write("</html>");
    res.end();
  } else if (url == "/node") {
    res.write("<html>");
    res.write("<head><title>From server</title></head>");
    res.write("<body><h1>Welcome to my Node Js project</h1>");
    res.write("</html>");
    res.end();
  }
});

server.listen(4000);
