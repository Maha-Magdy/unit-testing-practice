const capitalize = require("./capitalize-string");

test("amira becomes Amira", () => {
  expect(capitalize("amira")).toBe("Amira");
});
