var express = require("express");
var router = express.Router();
const { listData } = require("../NewData/myTicketData");
/* GET users listing. */
router.get("/", function(req, res, next) {
  let response = listData;
  res.send(response);
});

module.exports = router;
