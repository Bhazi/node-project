const express = require("express");
const contactUsController = require("../controller/contactUs-controller");

const router = express.Router();

router.get("/contactus", contactUsController.getContactUs);

module.exports = router;
