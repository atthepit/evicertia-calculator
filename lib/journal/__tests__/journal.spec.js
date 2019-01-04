const Journal = require("../journal");

describe("Journal", () => {
  describe("Add", () => {
    it("should persist the calculator operation", () => {
      const db = { save: jest.fn(() => Promise.resolve()) };
      const journal = new Journal(db);
      const result = { result: 1 };
      const parameters = { param: 1 };
      const operation = "/add";
      const trackId = "trackId";

      journal.add(trackId, operation, parameters, result);
      expect(db.save).toHaveBeenCalledWith({
        kind: "TrackRecord",
        trackId,
        operation,
        parameters,
        result
      });
    });
  });
});
