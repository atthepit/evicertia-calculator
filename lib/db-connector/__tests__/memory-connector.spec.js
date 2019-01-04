const MemoryConnector = require("../memory-connector");
jest.mock("uuid/v4", () => () => "some id");

describe("MemoryConnector", () => {
  describe("save", () => {
    let connector;

    beforeEach(() => {
      connector = new MemoryConnector();
    });

    it("should throw an error if record doesn't have a kind property", () => {
      const record = {};
      expect.assertions(1);
      return connector
        .save(record)
        .catch(e => expect(e.message).toMatch("kind"));
    });

    it("should return the new record ID if the record is saved correctly", () => {
      const record = { kind: "Record" };
      const id = "some id";
      expect.assertions(2);
      return connector
        .save(record)
        .then(recordId => expect(recordId).toEqual("some id"))
        .then(() => expect(connector.store[record.kind][id]).toBe(record));
    });

    it("should return the  record ID if the record already was saved", () => {
      const record = { kind: "Record", id: "other id" };
      expect.assertions(2);
      return connector
        .save(record)
        .then(recordId => expect(recordId).toEqual(record.id))
        .then(() =>
          expect(connector.store[record.kind][record.id]).toBe(record)
        );
    });
  });
});
