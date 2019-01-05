const PGConnector = require("../postgresql-connector");

describe("PGConnector", () => {
  describe("save", () => {
    const newId = "some new id";
    let connector;
    const db = {
      one: jest.fn((q, record) => {
        if (record.id) {
          return Promise.resolve({ id: record.id });
        } else {
          return Promise.resolve({ id: newId });
        }
      })
    };

    beforeEach(() => {
      connector = new PGConnector(db);
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
      expect.assertions(1);
      return connector
        .save(record)
        .then(recordId => expect(recordId).toEqual(newId));
    });

    it("should return the  record ID if the record already was saved", () => {
      const record = { kind: "Record", id: "other id" };
      expect.assertions(1);
      return connector
        .save(record)
        .then(recordId => expect(recordId).toEqual(record.id));
    });
  });
});
