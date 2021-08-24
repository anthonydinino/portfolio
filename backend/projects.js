const express = require("express");
const router = express.Router();

router.use(express.static(__dirname + "/projects/afl-api/public"));

router.get("/afl-api", (req, res) => {
  res.sendFile(__dirname + "/projects/afl-api/public/index.html");
});

module.exports = router;
