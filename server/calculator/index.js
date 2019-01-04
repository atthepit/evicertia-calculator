const express = require("express");
const bodyParser = require("body-parser");
const { addHandler } = require("./handlers");

const calculator = express.Router();
calculator.use(bodyParser.json());
calculator.post("/add", addHandler);

module.exports = calculator;
