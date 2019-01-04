const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(process.env.CALCULATOR_PORT, () => {
  console.log(
    `\nServer running on ${process.env.CALCULATOR_BASE_URL}:${
      process.env.CALCULATOR_PORT
    }\n`
  );
});
