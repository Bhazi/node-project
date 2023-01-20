const express = require("express");
const successController = require("../controller/success-controller");

const router = express.Router();

router.post("/success", successController.postSuccess);

module.exports = router;
