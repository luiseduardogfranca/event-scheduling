const bufferConvert = require("../../common/utils/bufferConvert");
const {
  validateTitleEvent,
  createEventFromString,
  generateTrack,
} = require("./SchedulingHandler");
const normalizeTime = require("../../common/utils/normalizeTime");

// create endpoint to received a file and return a array with all scheduling
module.exports = () => {
  const controller = {};

  controller.sendEvents = (req, res) => {
    try {
      if (!req.files) {
        res.send({
          status: false,
          message: "Not file uploaded!",
        });
      } else {
        let file = req.files.file;
        let arrayEvents = bufferConvert(file.data);

        arrayEvents = arrayEvents.filter((el) => validateTitleEvent(el));
        arrayEvents = arrayEvents.map((el) => createEventFromString(el));

        let tracks = generateTrack(arrayEvents);
        res.send(normalizeTime(tracks));
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err);
    }
  };

  return controller;
};
