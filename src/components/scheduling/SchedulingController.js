const bufferConvert = require("../../common/utils/bufferConvert");

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

        bufferConvert(file.data);
        res.send(file.name);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  };

  return controller;
};
