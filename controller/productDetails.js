const path = require("path");

exports.getProductDetails = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "productDetails.html"));
};
