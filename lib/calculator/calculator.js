const {
  checkNumbers,
  checkAllNumbers,
  checkIsArray
} = require("./preconditions");

function sum(a = 0, b = 0) {
  return a + b;
}

function sumAll(nums = []) {
  return nums.reduce(sum, 0);
}

function substract(a = 0, b = 0) {
  return a - b;
}

function substractAll(nums = []) {
  const [first = 0, ...rest] = nums;
  return rest.reduce(substract, first);
}

function multiply(a = 0, b = 1) {
  return a * b;
}

function multiplyAll(nums = []) {
  const [first = 0, ...rest] = nums;
  return rest.reduce(multiply, first);
}

function divide(a = 0, b = 1) {
  return Math.floor(a / b);
}

function divideAll(nums = []) {
  const [first = 0, ...rest] = nums;
  return rest.reduce(divide, first);
}

// Apply preconditions as decorators
const Calculator = {
  sum: checkNumbers(sum),
  sumAll: checkIsArray(checkAllNumbers(sumAll)),
  substract: checkNumbers(substract),
  substractAll: checkIsArray(checkAllNumbers(substractAll)),
  multiply: checkNumbers(multiply),
  multiplyAll: checkIsArray(checkAllNumbers(multiplyAll)),
  divide: checkNumbers(divide),
  divideAll: checkIsArray(checkAllNumbers(divideAll))
};

module.exports = Calculator;
