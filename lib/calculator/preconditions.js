const {
  NotArrayError,
  NotNumericArrayError,
  NotNumericParamsError
} = require("./errors");

function checkIsArray(fn) {
  return nums => {
    if (!Array.isArray(nums)) {
      throw new NotArrayError(
        `Exptected array of numbers, received: ${typeof nums}(${nums})`
      );
    }
    return fn(nums);
  };
}

function isNumber(x) {
  return typeof x === "number";
}

function checkAllNumbers(fn) {
  return nums => {
    if (!nums.every(isNumber)) {
      throw new NotNumericArrayError(
        `Exptected array of numbers, received: ${typeof nums}(${nums})`
      );
    }
    return fn(nums);
  };
}

function checkNumbers(fn) {
  return (a, b) => {
    if (!isNumber(a)) {
      throw new NotNumericParamsError(
        `Expected number, received: ${typeof a}(${a})`
      );
    }

    if (!isNumber(b)) {
      throw new NotNumericParamsError(
        `Expected number, received: ${typeof b}(${b})`
      );
    }

    return fn(a, b);
  };
}

module.exports = {
  checkIsArray,
  checkAllNumbers,
  checkNumbers
};
