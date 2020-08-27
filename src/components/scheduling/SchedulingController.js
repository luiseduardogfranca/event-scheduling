const bufferConvert = require("../../common/utils/bufferConvert");
const {
  validateTitleEvent,
  createEventFromString,
} = require("./SchedulingHandler");

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
        console.log(arrayEvents.length);
        arrayEvents = arrayEvents.filter((el) => validateTitleEvent(el));
        console.log(arrayEvents.length);
        arrayEvents = arrayEvents.map((el) => createEventFromString(el));
        console.log(arrayEvents);

        res.send(arrayEvents);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  };

  return controller;
};
