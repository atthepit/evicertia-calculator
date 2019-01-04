const handlers = require("../handlers");
const {
  NotArrayError,
  NotNumericArrayError,
  NotNumericParamsError
} = require("../../../lib/calculator/errors");

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

  describe("Division", () => {
    it("should fail if Dividend or Divisor are not passed", () => {
      const req = {
        body: { other: "thing" }
      };
      const res = {};
      const next = jest.fn();

      handlers.divHandler(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next.mock.calls[0][0].message).toContain("Expected number");
    });

    it("should fail if Dividend or Divisor is not numbers", () => {
      let req = {
        body: {
          Dividend: "a",
          Divisor: 1
        }
      };
      const res = {};
      const next = jest.fn();

      handlers.divHandler(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next.mock.calls[0][0].message).toContain("Expected number");

      req = {
        body: {
          Dividend: 1,
          Divisor: "a"
        }
      };
      handlers.divHandler(req, res, next);
      expect(next).toHaveBeenCalledTimes(2);
      expect(next.mock.calls[0][0].message).toContain("Expected number");
    });

    it("should return the division", () => {
      let req = {
        body: {
          Dividend: 7,
          Divisor: 2
        }
      };
      const res = {
        send: jest.fn()
      };
      const next = jest.fn();
      let expected = {
        Quotient: 3,
        Remainder: 1
      };

      handlers.divHandler(req, res, next);
      expect(res.send).toHaveBeenCalledTimes(1);
      expect(res.send).toHaveBeenCalledWith(expected);
    });

    it("should handle division by 0", () => {
      const req = {
        body: {
          Dividend: 7,
          Divisor: 0
        }
      };
      const res = {
        send: jest.fn()
      };
      const next = jest.fn();
      const expected = {
        Quotient: Infinity,
        Remainder: NaN
      };

      handlers.divHandler(req, res, next);
      expect(res.send).toHaveBeenCalledTimes(1);
      expect(res.send).toHaveBeenCalledWith(expected);
    });
  });

  describe("Error Handler", () => {
    it("should handle Calculator errors", () => {
      const req = {};
      const send = jest.fn();
      const res = { status: jest.fn(() => ({ send })) };
      const next = jest.fn();

      let message = "NotArrayError message";
      let err = new NotArrayError(message);
      handlers.errorHandler(err, req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(send).toHaveBeenCalledWith(message);

      message = "NotNumericArrayError message";
      err = new NotNumericArrayError(message);
      res.status.mockClear();
      send.mockClear();
      handlers.errorHandler(err, req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(send).toHaveBeenCalledWith(message);

      message = "NotNumericParamsError message";
      err = new NotNumericParamsError(message);
      res.status.mockClear();
      send.mockClear();
      handlers.errorHandler(err, req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(send).toHaveBeenCalledWith(message);
    });

    it("should call next if the error is unexpected", () => {
      const req = {};
      const send = jest.fn();
      const res = { status: jest.fn(() => ({ send })) };
      const next = jest.fn();

      let message = "ReferenceError message";
      let err = new ReferenceError(message);
      handlers.errorHandler(err, req, res, next);
      expect(res.status).not.toHaveBeenCalled();
      expect(send).not.toHaveBeenCalled();
      expect(next).toHaveBeenCalledWith(err);
    });
  });
});
