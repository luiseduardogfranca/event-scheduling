const express = require("express");
const SchedulingRoutes = require("./routes/SchedulingRoutes");

module.exports = () => {
  const app = express();

  // init routes
  SchedulingRoutes(app);

  return app;
};
