var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  let response = [
    {
      id: 1,
      tag: "Mathematic",
      tagId: "0",
      topic: "Calculus 2",
      location: "ECC 801",
      tutor: "Kanat Krub",
      amount: "3",
      full: "15",
      date: "03/02/20",
      startTime: "09:00",
      stopTime: "12:00",
      price: "120",
      ticket: "021549", // ticket code gen มาให้หน่อย ขอบคุณครับ
      img: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 2,
      tag: "Science",
      tagId: "1",
      topic: "Movement",
      location: "Hardware Lab",
      tutor: "Kru P Aum",
      amount: "4",
      full: "10",
      date: "05/02/20",
      startTime: "11:00",
      stopTime: "12:30",
      price: "200",
      ticket: "021545",
      img: "",
      description: ""
    }
  ];
  res.send(response);
});

module.exports = router;
