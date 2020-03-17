var express = require("express");
var router = express.Router();

router.get("/list", function(req, res, next) {
  let response = [
    {
      id: 1,
      tag: "Mathematic",
      tagId: "0",
      topic: "PAT 1",
      location: "GOOGLE",
      tutor: "Kanat Krub",
      amount: "1",
      full: "10",
      date: "01/10/2020",
      startTime: "09:30",
      stopTime: "12:00",
      price: "1200",
      img: ""
    },
    {
      id: 2,
      tag: "Science",
      tagId: "1",
      topic: "PAT 2",
      location: "GOOGLE",
      tutor: "Kanat Krub",
      amount: "3",
      full: "10",
      date: "01/10/2020",
      startTime: "09:30",
      stopTime: "12:00",
      price: "1000",
      img: ""
    }
  ];
  res.send(200, response);
});

router.get("/posting", (req, res) => {
  let response = {
    id: 1,
    tag: "Science",
    tagId: "1",
    topic: "Work and Energy",
    location: "ECC 811",
    tutor: "Kru P Ae",
    amount: "6",
    full: "20",
    date: "13/03/20",
    startTime: "09:30",
    stopTime: "12:00",
    price: "200",
    img: "",
    participant: [
      {
        id: 11,
        firstName: "Werawit",
        lastName: "Sirakunwat",
        ticket: "000001",
        isRedeem: false
      },
      {
        id: 19,
        firstName: "Natthapol",
        lastName: "Lekkuna",
        ticket: "000002",
        isRedeem: true
      },
      {
        id: 21,
        firstName: "Nawapon",
        lastName: "Khampraw",
        ticket: "000003",
        isRedeem: false
      },
      {
        id: 29,
        firstName: "Tanachot",
        lastName: "Humprae",
        ticket: "000004",
        isRedeem: false
      },
      {
        id: 31,
        firstName: "Korawith",
        lastName: "Suwanarat",
        ticket: "000005",
        isRedeem: false
      },
      {
        id: 35,
        firstName: "Kongkeat",
        lastName: "Sangrujee",
        ticket: "000006",
        isRedeem: true
      }
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };
  res.send(200, response);
});

module.exports = router;
