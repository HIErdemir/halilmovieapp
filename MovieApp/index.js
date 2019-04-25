const express = require("express");
const bodyParser = require("body-parser");
const apiv1 = require("./routes/apiv1");
const apiv2 = require("./routes/apiv2");
const logger = require("tracer").dailyfile({
  root: "./logs",
  maxLogFiles: 10,
  allLogsFileName: "movies",
  format: "{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})",
  dateformat: "HH:MM:ss.L"
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middelware, logging voor alle request
app.all("*", function(req, res, next) {
  logger.info("%s", req.hostname);
  next();
});

// Routing with versions
app.use("/apiv1", apiv1);
app.use("/apiv2", apiv2);

// Optional log error
function errorLoggerHandler(err, req, res, next) {
  logger.error("%s", err.message);
  next(err);
}

// Set default error handler
function errorResponseHandler(err, req, res, next) {
  res.status(500);
  res.json({ mgs: "Go, you hacker!" });
}

// Register the error handlers
app.use(errorLoggerHandler);
app.use(errorResponseHandler);

// ECMA 6
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(
    "Hi students of I4, the magic happens ar port " + server.address().port
  );
});

module.exports = app;
