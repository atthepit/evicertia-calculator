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

  describe("sumAll", () => {
    it("should sum an array of numbers", () => {
      const nums = [1, 1, 1, 1, 1];
      const expected = 5;
      const result = Calculator.sumAll(nums);
      expect(result).toEqual(expected);
    });

    it("should return 0 if the array is empty", () => {
      const nums = [];
      const expected = 0;
      const result = Calculator.sumAll(nums);
      expect(result).toEqual(expected);
    });

    it("should throw an error if the argument is not an array", () => {
      const nums = "not an array";
      expect(() => {
        Calculator.sumAll(nums);
      }).toThrow();
    });
  });

  describe("substract", () => {
    it("should substract nums", () => {
      const nums = [1, 2, 3, 4, 5, 6];
      nums.forEach(num => {
        const result = Calculator.substract(num, num);
        const expected = 0;
        expect(result).toEqual(expected);
      });
    });
  });

  describe("substractAll", () => {
    it("should sum an array of numbers", () => {
      const nums = [5, 1, 1, 1, 1];
      const expected = 1;
      const result = Calculator.substractAll(nums);
      expect(result).toEqual(expected);
    });

    it("should handle negative numbers correctly", () => {
      const nums = [5, -5];
      const expected = 10;
      const result = Calculator.substractAll(nums);
      expect(result).toEqual(expected);
    });

    it("should return 0 if the array is empty", () => {
      const nums = [];
      const expected = 0;
      const result = Calculator.substractAll(nums);
      expect(result).toEqual(expected);
    });

    it("should throw an error if the argument is not an array", () => {
      const nums = "not an array";
      expect(() => {
        Calculator.substractAll(nums);
      }).toThrow();
    });
  });
});
