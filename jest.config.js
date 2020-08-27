process.env.API_ENV = "test";

module.exports = {
  roots: ["src"],
  globals: {},
  moduleFileExtensions: ["js"],
  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/src/migrations"],
  testMatch: ["**/*.spec.js"],
  testEnvironment: "node",
};
