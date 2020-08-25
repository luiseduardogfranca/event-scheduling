process.env.API_ENV = "test";

module.exports = {
  roots: ["src"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "js"],
  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/src/migrations"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/*.spec.ts"],
  testEnvironment: "node",
};
