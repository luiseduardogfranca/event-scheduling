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
        console.log(req.files.file);
        res.send(req.files.file);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  };

  return controller;
};
