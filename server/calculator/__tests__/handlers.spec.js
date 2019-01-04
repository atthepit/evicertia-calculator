const handlers = require("../handlers");

describe("Calculator Handlers", () => {
  describe("Add", () => {
    it("should fail if Addends is not passed", () => {
      const req = {
        body: { other: "thing" }
      };
      const res = {};
      const next = jest.fn();

      handlers.addHandler(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next.mock.calls[0][0].message).toContain(
        "Exptected array of numbers"
      );
    });

    it("should fail if Addends is not an array", () => {
      const req = {
        body: { Addends: "not an array" }
      };
      const res = {};
      const next = jest.fn();

      handlers.addHandler(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next.mock.calls[0][0].message).toContain(
        "Exptected array of numbers"
      );
    });

    it("should fail if Addends is not a numeric array", () => {
      const req = {
        body: { Addends: [1, "a"] }
      };
      const res = {};
      const next = jest.fn();

      handlers.addHandler(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next.mock.calls[0][0].message).toContain(
        "Exptected array of numbers"
      );
    });

    it("should return the sum of the Addends", () => {
      const req = {
        body: { Addends: [1, 2, 3] }
      };
      const res = {
        send: jest.fn()
      };
      const next = jest.fn();
      const expected = { Sum: 6 };

      handlers.addHandler(req, res, next);
      expect(res.send).toHaveBeenCalledTimes(1);
      expect(res.send).toHaveBeenCalledWith(expected);
    });
  });

  describe("Substract", () => {
    it("should fail if Minuend or Subtrahend are not passed", () => {
      const req = {
        body: { other: "thing" }
      };
      const res = {};
      const next = jest.fn();

      handlers.subHandler(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next.mock.calls[0][0].message).toContain("Expected number");
    });

    it("should fail if Minuend or Subtrahend is not numbers", () => {
      let req = {
        body: {
          Minuend: "a",
          Subtrahend: 1
        }
      };
      const res = {};
      const next = jest.fn();

      handlers.subHandler(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next.mock.calls[0][0].message).toContain("Expected number");

      req = {
        body: {
          Minuend: 1,
          Subtrahend: "a"
        }
      };
      handlers.subHandler(req, res, next);
      expect(next).toHaveBeenCalledTimes(2);
      expect(next.mock.calls[0][0].message).toContain("Expected number");
    });

    it("should return the difference", () => {
      const req = {
        body: {
          Minuend: 3,
          Subtrahend: 1
        }
      };
      const res = {
        send: jest.fn()
      };
      const next = jest.fn();
      const expected = { Difference: 2 };

      handlers.subHandler(req, res, next);
      expect(res.send).toHaveBeenCalledTimes(1);
      expect(res.send).toHaveBeenCalledWith(expected);
    });
  });

  describe("Multiply", () => {
    it("should fail if Factors is not passed", () => {
      const req = {
        body: { other: "thing" }
      };
      const res = {};
      const next = jest.fn();

      handlers.multHandler(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next.mock.calls[0][0].message).toContain(
        "Exptected array of numbers"
      );
    });

    it("should fail if Factors is not an array", () => {
      const req = {
        body: { Factors: "not an array" }
      };
      const res = {};
      const next = jest.fn();

      handlers.multHandler(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next.mock.calls[0][0].message).toContain(
        "Exptected array of numbers"
      );
    });

    it("should fail if Factors is not a numeric array", () => {
      const req = {
        body: { Factors: [1, "a"] }
      };
      const res = {};
      const next = jest.fn();

      handlers.multHandler(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next.mock.calls[0][0].message).toContain(
        "Exptected array of numbers"
      );
    });

    it("should return the product of the Factors", () => {
      const req = {
        body: { Factors: [1, 2, 3] }
      };
      const res = {
        send: jest.fn()
      };
      const next = jest.fn();
      const expected = { Product: 6 };

      handlers.multHandler(req, res, next);
      expect(res.send).toHaveBeenCalledTimes(1);
      expect(res.send).toHaveBeenCalledWith(expected);
    });
  });
});
