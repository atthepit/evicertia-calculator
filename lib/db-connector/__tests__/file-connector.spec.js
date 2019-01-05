const FileConnector = require("../file-connector");
jest.mock("fs", () => {
  return {
    readFile(path, enc, cb) {
      cb();
    },
    writeFile(path, data, opt, cb) {
      cb();
    }
  };
});

describe("FileConnector", () => {
  describe("save", () => {
    const newId = "some new id";
    let connector;

    beforeEach(() => {
      connector = new FileConnector({
        memoryStore: {
          save: jest.fn(record => {
            if (record.kind) {
              return Promise.resolve(record.id || newId);
            } else {
              return Promise.reject(new TypeError("kind"));
            }
          })
        }
      });
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
      expect.assertions(2);
      return connector.save(record).then(recordId => {
        expect(recordId).toEqual(newId);
        expect(connector.memoryStore.save).toHaveBeenCalled();
      });
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
