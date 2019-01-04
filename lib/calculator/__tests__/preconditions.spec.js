const {
  checkIsArray,
  checkAllNumbers,
  checkNumbers
} = require("../preconditions");

describe("Calculator preconditions", () => {
  describe("checkIsArray", () => {
    it("should be passed a function and return another one", () => {
      const result = checkIsArray(jest.fn());
      expect(typeof result).toEqual("function");
    });

    it("should call the decorated function if the argument is an array", () => {
      const decorated = jest.fn();
      checkIsArray(decorated)([1, 2]);
      expect(decorated).toHaveBeenCalled();
    });

    it("should throw an error if the argument is not an array", () => {
      const decorated = jest.fn();
      expect(() => {
        checkIsArray(decorated)("not an array");
      }).toThrow();
      expect(decorated).not.toHaveBeenCalled();
    });
  });

  describe("checkAllNumbers", () => {
    it("should be passed a function and return another one", () => {
      const result = checkAllNumbers(jest.fn());
      expect(typeof result).toEqual("function");
    });

    it("should call the decorated function if the argument is an array of numbers", () => {
      const decorated = jest.fn();
      checkAllNumbers(decorated)([1, 2]);
      expect(decorated).toHaveBeenCalled();
    });

    it("should throw an error if not all elements are numbers", () => {
      const decorated = jest.fn();
      expect(() => {
        checkAllNumbers(decorated)([1, "2", 3]);
      }).toThrow();
      expect(decorated).not.toHaveBeenCalled();
    });
  });

  describe("checkIsNumber", () => {
    it("should be passed a function and return another one", () => {
      const result = checkNumbers(jest.fn());
      expect(typeof result).toEqual("function");
    });

    it("should call the decorated function if the argument is an array of numbers", () => {
      const decorated = jest.fn();
      checkNumbers(decorated)(1, 2);
      expect(decorated).toHaveBeenCalled();
    });

    it("should throw an error if not all elements are numbers", () => {
      const decorated = jest.fn();
      expect(() => {
        checkNumbers(decorated)(1, "2");
      }).toThrow();
      expect(() => {
        checkNumbers(decorated)(null, 1);
      }).toThrow();
      expect(decorated).not.toHaveBeenCalled();
    });
  });
});
