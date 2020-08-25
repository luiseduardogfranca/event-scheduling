const { resolve } = require("path");
const { config } = require("dotenv");

config({
  path: resolve(__dirname, "../../.env"),
});

const apiConfig = {
  API_VERSION: process.env.API_VERSION,
  API_ENV: process.env.API_ENV,
  API_PORT: process.env.API_PORT,
};

module.exports = { apiConfig };
