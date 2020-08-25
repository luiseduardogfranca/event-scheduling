const { apiConfig } = require("./config/apiConfig");
const app = require("./app");

(async () => {
  // call appLoader
  app().listen(apiConfig.API_PORT, () => {
    console.log("Servidor mode on");
  });
})();
