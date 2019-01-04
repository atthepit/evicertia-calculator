const {
  NotArrayError,
  NotNumericArrayError,
  NotNumericParamsError
} = require("./errors");

const Calculator = {
  sum(a = 0, b = 0) {
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

    return a + b;
  },

  sumAll(nums = []) {
    if (!Array.isArray(nums)) {
      throw new NotArrayError(`Expected Array, received: ${nums}`);
    }
    return nums.reduce(this.sum, 0);
  },

  substract(a = 0, b = 0) {
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

    return a - b;
  },

  substractAll(nums = []) {
    if (!Array.isArray(nums)) {
      throw new NotArrayError(`Expected Array, received: ${nums}`);
    }

    if (!nums.every(isNumber)) {
      throw new NotNumericArrayError(
        `Exptected array of numbers, received: ${typeof nums}(${nums})`
      );
    }

    const [first = 0, ...rest] = nums;
    return rest.reduce(this.substract, first);
  },

  multiply(a = 0, b = 1) {
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

    return a * b;
  },

  multiplyAll(nums = []) {
    if (!Array.isArray(nums)) {
      throw new NotArrayError(`Expected Array, received: ${nums}`);
    }

    if (!nums.every(isNumber)) {
      throw new NotNumericArrayError(
        `Exptected array of numbers, received: ${typeof nums}(${nums})`
      );
    }

    const [first = 0, ...rest] = nums;
    return rest.reduce(this.multiply, first);
  },

  divide(a = 0, b = 1) {
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

    return Math.floor(a / b);
  },

  divideAll(nums = []) {
    if (!Array.isArray(nums)) {
      throw new NotArrayError(`Expected Array, received: ${nums}`);
    }

    if (!nums.every(isNumber)) {
      throw new NotNumericArrayError(
        `Exptected array of numbers, received: ${typeof nums}(${nums})`
      );
    }

    const [first = 0, ...rest] = nums;
    return rest.reduce(this.divide, first);
  }
};

function isNumber(x) {
  return typeof x === "number";
}

module.exports = Calculator;
