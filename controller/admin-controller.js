const path = require("path");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

exports.postAddproduct = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};

