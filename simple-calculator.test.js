const Calculator = require('./simple-calculator');

describe('add function', () => {
  test('The result of 4 add 2 is 6', () => {
    expect(Calculator.add(4, 2)).toBe(6);
  });

  test('The result of 5 add 5 is 10', () => {
    expect(Calculator.add(5, 5)).toBe(10);
  });

  test('The result of 6 add 6 is 12', () => {
    expect(Calculator.add(6, 6)).toBe(12);
  });
});

describe('subtract function', () => {
  test('The result of 4 subtract 2 is 2', () => {
    expect(Calculator.subtract(4, 2)).toBe(2);
  });

  test('The result of 10 subtract 5 is 5', () => {
    expect(Calculator.subtract(10, 5)).toBe(5);
  });

  test('The result of 6 subtract 6 is 0', () => {
    expect(Calculator.subtract(6, 6)).toBe(0);
  });
});

describe('divide function', () => {
  test('The result of 4 divide 2 is 2', () => {
    expect(Calculator.divide(4, 2)).toBe(2);
  });

  test('The result of 10 divide 5 is 2', () => {
    expect(Calculator.divide(10, 5)).toBe(2);
  });

  test('The result of 6 divide 6 is 1', () => {
    expect(Calculator.divide(6, 6)).toBe(1);
  });
});

describe('multiply function', () => {
  test('The result of 4 multiply 2 is 8', () => {
    expect(Calculator.multiply(4, 2)).toBe(8);
  });

  test('The result of 10 multiply 5 is 50', () => {
    expect(Calculator.multiply(10, 5)).toBe(50);
  });

  test('The result of 6 multiply 6 is 36', () => {
    expect(Calculator.multiply(6, 6)).toBe(36);
  });
});