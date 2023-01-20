const path = require("path");

exports.postSuccess = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "success.html"));
};
