var http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><label>Name </label><input type="text" name="title"></input><label> Size </label><input type="number" name="size"></input><button type="submit">Add product</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>HI user  </h1>");
});

app.listen(3000);
