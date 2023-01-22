const path = require("path");
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

exports.postAddproduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
