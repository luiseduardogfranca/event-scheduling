const SchedulingController = require("../components/scheduling/SchedulingController");

module.exports = (app) => {
  const controller = SchedulingController();
  app.route("/api/v1/sendEvents").post(controller.sendEvents);
};
