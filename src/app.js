const express = require("express");
const SchedulingRoutes = require("./common/routes/SchedulingRoutes");

module.exports = () => {
  const app = express();

  // init routes
  SchedulingRoutes(app);

  return app;
};
