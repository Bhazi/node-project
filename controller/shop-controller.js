const path = require("path");
const Product = require('../models/product');

exports.getShop = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};

