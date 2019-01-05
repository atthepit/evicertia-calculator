const pgp = require("pg-promise")();
const DBConnector = require("./db-connector");

const DEFAULT_SCHEMA = "public";
const DEFAULT_CONNECTION = {
  host: process.env.POSTGRESQL_HOST,
  port: process.env.POSTGRESQL_PORT,
  database: process.env.POSTGRESQL_DATABASE,
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD
};

class PostgreSQLConnector extends DBConnector {
  constructor(db = pgp(DEFAULT_CONNECTION)) {
    super();
    this.schema = process.env.POSTGRESQL_SCHEMA || DEFAULT_SCHEMA;
    this.db = db;
  }

  save(record) {
    if (!record.kind) {
      return Promise.reject(
        new TypeError("Object record should specify a kind property")
      );
    }

    if (record.id) {
      return this._update(record);
    } else {
      return this._save(record);
    }
  }

  _save(record) {
    const { kind, ...rest } = record;
    const keys = Object.keys(rest);
    const query = `
    INSERT INTO ${this.schema}."${kind}"(${keys})
    VALUES(${keys.map(k => `\${${k}}`)})
    RETURNING id`;

    return this.db.one(query, rest).then(data => data.id);
  }

  _update(record) {
    const { kind, ...rest } = record;
    const keys = Object.keys(rest);
    const query = `
    UPDATE ${this.schema}."${kind}"
    SET ${keys.map(k => `${k}=${record[k]}`).join(", ")}
    WHERE id=${record.id};`;

    return this.db.one(query, rest).then(data => data.id);
  }
}

module.exports = PostgreSQLConnector;
