const fs = require("fs");
const DBConnector = require("./db-connector");
const MemoryConnector = require("./memory-connector");

const { FILE_CONNECTOR_PATH, FILE_CONNECTOR_ENCODING } = process.env;

class FileConnector extends DBConnector {
  constructor({
    encoding = FILE_CONNECTOR_ENCODING,
    memoryStore = new MemoryConnector(),
    path = FILE_CONNECTOR_PATH
  } = {}) {
    super();
    this.path = path;
    this.encoding = encoding;
    this.memoryStore = memoryStore;
    this._readStore();
  }

  save(record) {
    return this.memoryStore.save(record).then(recordId => {
      return this._persistStore().then(() => recordId);
    });
  }

  _readStore() {
    return FileConnector._readFile(this.path, this.encoding).then(
      (store = "{}") => {
        this.memoryStore.store = JSON.parse(store);
        return this.memoryStore.store;
      },
      err => {
        if (err.code === "ENOENT") {
          this.memoryStore.store = {};
        } else {
          return Promise.reject(err);
        }
      }
    );
  }

  static _readFile(...args) {
    return new Promise((res, rej) => {
      fs.readFile(...args, (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
    });
  }

  _persistStore() {
    return FileConnector._writeFile(
      this.path,
      JSON.stringify(this.memoryStore.store, null, 2),
      {
        encoding: this.encoding
      }
    );
  }

  static _writeFile(...args) {
    return new Promise((res, rej) => {
      fs.writeFile(...args, err => {
        if (err) {
          rej(err);
        } else {
          res();
        }
      });
    });
  }
}

module.exports = FileConnector;
