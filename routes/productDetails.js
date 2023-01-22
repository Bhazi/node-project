const express = require("express");
const productDetailsController = require("../controller/productDetails");

const router = express.Router();

router.get("/product-details", productDetailsController.getProductDetails);

module.exports = router;
