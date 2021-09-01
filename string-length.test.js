const { expect } = require('@jest/globals');
const stringLength = require('./string-length');

test('length of Maha to equal 4', () => {
  expect(stringLength('Maha')).toBe(4);
});