const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact-us.html"));
});

module.exports = router;
