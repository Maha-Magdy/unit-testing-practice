const { expect } = require("@jest/globals");
const stringLength = require("./string-length");

test("length of Maha to equal 4", () => {
  expect(stringLength("Maha")).toBe(4);
});

test('String passed doesn\'t met the conditions', () => {
  expect(() => stringLength("Maha Magdy Abd-elaal")).toThrow('The string passed doesn\'t not met the conditions which are string should be at least 1 character long and not longer than 10 characters.');
});