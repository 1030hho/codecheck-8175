"use strict";

let expect = require("chai").expect;
let codecheck = require("codecheck");
let app = codecheck.consoleApp(process.env.APP_COMMAND);
let testcases = require("./basic_testcases.json");

describe("Payment with minimal number of coins", () => {
  testcases.forEach((testcase) => {
    it(testcase.title, () => {
      return app.run(testcase.input).spread((exitCode, stdOut) => {
        let result = parseInt(stdOut.join(""));
        expect(exitCode).to.equal(0, "expect CLI to exit with status code 0");
        expect(result).to.be.equal(testcase.output);
      });
    });
  });
});
