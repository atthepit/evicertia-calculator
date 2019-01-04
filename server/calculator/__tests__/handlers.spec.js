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
});
