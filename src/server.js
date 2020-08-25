const { apiConfig } = require("./config/apiConfig");
const logLoader = require("./common/logLoader");
const app = require("./app")();

(async () => {
  // call appLoader
  app.listen(apiConfig.API_PORT, () => {
    logLoader.info(
      `API is running at https://localhost:${apiConfig.API_PORT} in ${app.get(
        "env"
      )} mode`
    );
  });
})();
