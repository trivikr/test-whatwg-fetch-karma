process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: ["src/**/*.ts"],
    preprocessors: { "**/*.ts": "karma-typescript" },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeHeadless"],
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
      // ToDo: Check if true ESM testing can be done here.
      compilerOptions: {
        module: "commonjs",
      },
      bundlerOptions: {
        transforms: [require("karma-typescript-es6-transform")()],
      },
    },
  });
};
