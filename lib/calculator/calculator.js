const { NotArrayError } = require("./errors");

const Calculator = {
  sum(a = 0, b = 0) {
    return a + b;
  },

  sumAll(nums = []) {
    if (!Array.isArray(nums)) {
      throw new NotArrayError(`Expected Array, received: ${nums}`);
    }
    return nums.reduce(this.sum, 0);
  },

  substract(a = 0, b = 0) {
    return a - b;
  },

  substractAll(nums = []) {
    if (!Array.isArray(nums)) {
      throw new NotArrayError(`Expected Array, received: ${nums}`);
    }
    const [first = 0, ...rest] = nums;
    return rest.reduce(this.substract, first);
  },

  multiply(a = 0, b = 1) {
    return a * b;
  }
};

module.exports = Calculator;
