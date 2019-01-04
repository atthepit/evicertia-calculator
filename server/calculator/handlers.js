const Calculator = require("../../lib/calculator");

function addHandler(req, res, next) {
  const { Addends: addends } = req.body;

  let result;
  try {
    result = Calculator.sumAll(addends);
  } catch (error) {
    return next(error);
  }

  const response = { Sum: result };
  res.send(response);
}

function subHandler(req, res, next) {
  const { Minuend: minuend, Subtrahend: subtrahend } = req.body;
  let result;

  try {
    result = Calculator.substract(minuend, subtrahend);
  } catch (error) {
    return next(error);
  }

  const response = { Difference: result };
  res.send(response);
}

function multHandler(req, res, next) {
  const { Factors: factors } = req.body;

  let result;
  try {
    result = Calculator.multiplyAll(factors);
  } catch (error) {
    return next(error);
  }
  const response = { Product: result };
  res.send(response);
}

function divHandler(req, res, next) {
  const { Dividend: dividend, Divisor: divisor } = req.body;

  let result;
  try {
    result = Calculator.fullDivision(dividend, divisor);
  } catch (error) {
    return next(error);
  }
  const response = {
    Quotient: result.quotient,
    Remainder: result.remainder
  };
  res.send(response);
}

module.exports = {
  addHandler,
  subHandler,
  multHandler,
  divHandler
};
