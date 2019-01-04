const express = require("express");
const bodyParser = require("body-parser");
const { addHandler, subHandler } = require("./handlers");

const calculator = express.Router();
calculator.use(bodyParser.json());
calculator.post("/add", addHandler);
calculator.post("/sub", subHandler);

module.exports = calculator;
