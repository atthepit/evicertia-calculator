const Calculator = {
  sum(a = 0, b = 0) {
    return a + b;
  },

  sumAll(nums = []) {
    return nums.reduce(this.sum, 0);
  },

  substract(a = 0, b = 0) {
    return a - b;
  }
};

module.exports = Calculator;
