const { it } = require('@jest/globals');
const reverseString = require('./reverse-string');

test('the string cat become tac', () => {
  expect(reverseString('cat')).toBe('tac');
});