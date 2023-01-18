var http = require("http");
var fs = require("fs");

var value;
fs.readFile("message.txt", "utf8", function (err, data) {
  value = data;
});

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url == "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(`<p>${value}</p>`);
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      value = message;
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>From server</title></head>");
  res.write("<body><h1>Welcome to my Node Js project</h1>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
