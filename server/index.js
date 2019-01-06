const express = require("express");
const logger = require("./logger");
const calculator = require("./calculator");

const app = express();
app.use(logger());
app.use("/calculator", calculator);

const { CALCULATOR_PROTOCOL, CALCULATOR_HOST, CALCULATOR_PORT } = process.env;
app.listen(CALCULATOR_PORT, () => {
  const BASE_URL = `${CALCULATOR_PROTOCOL}://${CALCULATOR_HOST}:${CALCULATOR_PORT}`;
  console.log(`\nServer running on ${BASE_URL}\n`);
});
