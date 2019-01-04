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

  describe("multiply", () => {
    it("should multiply nums", () => {
      let result = Calculator.multiply(2, 3);
      let expected = 6;
      expect(result).toEqual(expected);

      result = Calculator.multiply(10, -3);
      expected = -30;
      expect(result).toEqual(expected);
    });
  });

  describe("multiplyAll", () => {
    it("should sum an array of numbers", () => {
      const nums = [5, 1, 2];
      const expected = 10;
      const result = Calculator.multiplyAll(nums);
      expect(result).toEqual(expected);
    });

    it("should handle negative numbers correctly", () => {
      const nums = [5, -5];
      const expected = -25;
      const result = Calculator.multiplyAll(nums);
      expect(result).toEqual(expected);
    });

    it("should return 0 if the array is empty", () => {
      const nums = [];
      const expected = 0;
      const result = Calculator.multiplyAll(nums);
      expect(result).toEqual(expected);
    });

    it("should throw an error if the argument is not an array", () => {
      const nums = "not an array";
      expect(() => {
        Calculator.multiplyAll(nums);
      }).toThrow();
    });
  });

  describe("divide", () => {
    it("should divide nums", () => {
      const nums = [1, 2, 3, 4, 5, 6];
      nums.forEach(num => {
        const result = Calculator.divide(num, num);
        const expected = 1;
        expect(result).toEqual(expected);
      });
    });

    it("should be int division", () => {
      const result = Calculator.divide(11, 3);
      const expected = 3;
      expect(result).toEqual(expected);
    });
  });

  describe("divideAll", () => {
    it("should divide an array of numbers", () => {
      const nums = [12, 2, 2];
      const expected = 3;
      const result = Calculator.divideAll(nums);
      expect(result).toEqual(expected);
    });

    it("should return 0 if the array is empty", () => {
      const nums = [];
      const expected = 0;
      const result = Calculator.divideAll(nums);
      expect(result).toEqual(expected);
    });

    it("should return the same number if the array has only one number", () => {
      const nums = [4];
      const expected = 4;
      const result = Calculator.divideAll(nums);
      expect(result).toEqual(expected);
    });

    it("should handle 0 divisions correctly", () => {
      const nums = [1, 0, 5];
      const expected = Infinity;
      const result = Calculator.divideAll(nums);
      expect(result).toEqual(expected);
    });

    it("should throw an error if the argument is not an array", () => {
      const nums = "not an array";
      expect(() => {
        Calculator.divideAll(nums);
      }).toThrow();
    });
  });
});
