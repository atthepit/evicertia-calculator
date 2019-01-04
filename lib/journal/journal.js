const DBConnector = require("../db-connector");

class Journal {
  constructor(db = new DBConnector()) {
    this.db = db;
  }

  add(trackId, op, params, res) {
    const trackRecord = this.createTrackRecord(trackId, op, params, res);
    return this.db.save(trackRecord).then(Function.prototype);
  }

  createTrackRecord(trackId, operation, parameters, result) {
    return {
      kind: "TrackRecord",
      trackId,
      operation,
      parameters,
      result
    };
  }
}

module.exports = Journal;
