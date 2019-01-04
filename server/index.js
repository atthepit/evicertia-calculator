const express = require("express");
const calculator = require("./calculator");

const app = express();
app.use("/calculator", calculator);

app.listen(process.env.CALCULATOR_PORT, () => {
  console.log(
    `\nServer running on ${process.env.CALCULATOR_BASE_URL}:${
      process.env.CALCULATOR_PORT
    }\n`
  );
});
