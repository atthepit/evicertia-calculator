const uuidv4 = require("uuid/v4");
const DBConnector = require("./db-connector");

class MemoryConnector extends DBConnector {
  constructor() {
    super();
    this.store = {};
  }
  save(record) {
    if (!record.kind) {
      return Promise.reject(
        new TypeError("Object record should specify a kind property")
      );
    }

    if (!this.store.hasOwnProperty(record.kind)) {
      this.store[record.kind] = {};
    }

    if (!record.id) {
      record.id = uuidv4();
    }

    this.store[record.kind][record.id] = record;
    return Promise.resolve(record.id);
  }
}

module.exports = MemoryConnector;
