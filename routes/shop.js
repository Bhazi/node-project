const express = require("express");
const shopController = require("../controller/shop-controller");


const router = express.Router();

router.get("/", shopController.getShop);

module.exports = router;
