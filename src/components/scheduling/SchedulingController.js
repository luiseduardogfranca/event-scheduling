// create endpoint to received a file and return a array with all scheduling
module.exports = () => {
  const controller = {};

  controller.sendEvents = (req, res) =>
    res.status(200).json({ test: "Criado com sucesso!" });

  return controller;
};
