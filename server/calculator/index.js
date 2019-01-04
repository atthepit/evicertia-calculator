const express = require("express");
const bodyParser = require("body-parser");
const {
  addHandler,
  subHandler,
  multHandler,
  divHandler
} = require("./handlers");

const calculator = express.Router();
calculator.use(bodyParser.json());
calculator.post("/add", addHandler);
calculator.post("/sub", subHandler);
calculator.post("/mult", multHandler);
calculator.post("/div", divHandler);

module.exports = calculator;
