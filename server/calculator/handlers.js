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

module.exports = { addHandler };
