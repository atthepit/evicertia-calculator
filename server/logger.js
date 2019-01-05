const path = require("path");
const fs = require("fs");
const morgan = require("morgan");

function logger() {
  const isProduction = process.env.NODE_ENV === "production";
  if (!isProduction) {
    return morgan("dev");
  }

  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "server.log"),
    { flags: "a" }
  );
  return morgan("combined", { stream: accessLogStream });
}

module.exports = logger;
