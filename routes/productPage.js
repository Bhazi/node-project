const express = require("express");
const productPageController = require("../controller/productPage");

const router = express.Router();

router.get("/product-page", productPageController.getProductPage);


module.exports = router;