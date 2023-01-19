const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res, next) => {
  fs.readFile("./routes/message.txt", "utf8", function (err, data) {
    if (err) {
      console.log(err);
    }
    res.send(
      `<p>${data}</p>
      <form onSubmit="document.getElementById('username').value = localStorage.getItem('username')" action="/" method="POST">
      <input type="text" name="values" placeholder="message"></input>
      <input type="hidden" name="username" id="username"></input>
      <button type="submit"> Send </button>
      </form>`
    );
  });
});

router.post("/", (req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(`${obj.username}:${obj.values}`);
  fs.appendFile(
    "./routes/message.txt",
    `${obj.username}:${obj.values}\t\t`,
    (err) => {
      if (err) console.log(err);
    }
  );
  res.redirect("/");
});

module.exports = router;
