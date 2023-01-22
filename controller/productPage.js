const path = require("path");

exports.getProductPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "productPage.html"));
};
