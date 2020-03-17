var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  let response = {
    id: " DrZin",
    firstName: " Pasawee ",
    lastName: "Laearun",
    img: "",
    coing: 125,
    email: "pasawee.dev@gmail.com"
  };
  res.send(response);
});

module.exports = router;
