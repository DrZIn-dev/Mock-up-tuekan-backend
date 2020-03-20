var express = require("express");
var router = express.Router();
const { profileData } = require("../NewData/profileData");
/* GET users listing. */
router.get("/", function(req, res, next) {
  let response = profileData;
  res.send(response);
});

module.exports = router;
