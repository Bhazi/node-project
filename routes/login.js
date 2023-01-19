const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="GET"><input id="username" type="text" placeholder="user name"></input><button>Login</button></form>'
  );
});

module.exports = router;
