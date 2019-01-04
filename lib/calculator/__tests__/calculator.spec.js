const Calculator = require("../calculator");

describe("Calculator", () => {
  describe("sum", () => {
    it("should sum nums", () => {
      const nums = [1, 2, 3, 4, 5, 6];
      nums.forEach(num => {
        const result = Calculator.sum(num, num);
        const expected = num * 2;
        expect(result).toEqual(expected);
      });
    });
  });
});
