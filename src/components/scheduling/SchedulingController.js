const bufferConvert = require("../../common/utils/bufferConvert");
const {
  validateTitleEvent,
  createEventFromString,
  generateTrack,
} = require("./SchedulingHandler");
const normalizeTime = require("../../common/utils/normalizeTime");
const checkFormatFile = require("../../common/utils/checkFormatFile");

// create endpoint to received a file and return a array with all scheduling
module.exports = () => {
  const controller = {};

  controller.sendEvents = (req, res) => {
    try {
      if (!req.files) {
        res.status(401).send({
          message: "Not file uploaded!",
        });
      } else if (req.files.file === null || req.files.file === undefined) {
        res.status(401).send({ message: "Not file uploaded" });
      } else if (!checkFormatFile(req.files.file.name)) {
        res
          .status(401)
          .send({ message: "Invalid file format, send a .txt file!" });
      } else {
        let file = req.files.file;
        let arrayEvents = bufferConvert(file.data);

        arrayEvents = arrayEvents.filter((el) => validateTitleEvent(el));
        arrayEvents = arrayEvents.map((el) => createEventFromString(el));
        let tracks = generateTrack(arrayEvents);

        res.send(tracks);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err);
    }
  };

  return controller;
};
