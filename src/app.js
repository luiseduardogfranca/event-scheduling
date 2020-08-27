const express = require("express");
const cors = require("cors");
const SchedulingRoutes = require("./routes/SchedulingRoutes");
const fileUpload = require("express-fileupload");

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(fileUpload({ createParentPath: true }));

  SchedulingRoutes(app);

  return app;
};
