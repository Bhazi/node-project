const express = require("express");
const adminUsController = require("../controller/admin-controller");

const router = express.Router();

router.get("/add-product", adminUsController.getAddProduct);

router.post("/add-product", adminUsController.postAddproduct);

module.exports = router;
