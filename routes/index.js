const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/user", function(req, res, next) {
res.send({
  "Developer":"Naushad alam",
  "Tech":"CI/CD Pipeline"
})
})

module.exports = router;
