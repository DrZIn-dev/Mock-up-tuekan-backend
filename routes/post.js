var express = require("express");
var router = express.Router();
const { storeProduct } = require("../NewData/mainPostList");
const { myPostingData } = require("../NewData/myPostingData");
router.get("/list", function(req, res, next) {
  let response = storeProduct;
  res.send(200, response);
});

router.get("/posting", (req, res) => {
  let response = myPostingData;
  res.send(200, response);
});

module.exports = router;
