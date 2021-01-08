const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ say: "hello" });
});

router.post("/", (req, res) => {
  if (req.body.password == "1") {
    return res.json({ result: "Hello World" });
  }
  return res.json({ result: "Wrong Password" });
});

module.exports = router;
