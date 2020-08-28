const express = require("express");
const cors = require("cors");
const SchedulingRoutes = require("./routes/SchedulingRoutes");
const fileUpload = require("express-fileupload");

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(fileUpload({ createParentPath: true }));

  SchedulingRoutes(app);
  app.route("/api/v1/").get((req, res) => res.send("API is worked!"));
  app.route("/").get((req, res) => res.send("API is worked!"));

  return app;
};
