const express = require("express");
const bodyParser = require("body-parser");
const JournalMiddleware = require("./journal");
const Journal = require("../../lib/journal");
const {
  addHandler,
  subHandler,
  multHandler,
  divHandler,
  errorHandler
} = require("./handlers");

if (process.env.DB_CONNECTOR == null) {
  throw new Error("You must set the DB_CONNECTOR variable in the .env file");
}
const dbConnector = process.env.DB_CONNECTOR;
const DBConnector = require(`../../lib/db-connector/${dbConnector}-connector`);

const db = new DBConnector();
const journal = new Journal(db);

const calculator = express.Router();
calculator.use(bodyParser.json());
calculator.post("/add", addHandler);
calculator.post("/sub", subHandler);
calculator.post("/mult", multHandler);
calculator.post("/div", divHandler);
calculator.use(JournalMiddleware(journal));
calculator.use(errorHandler);

module.exports = calculator;
