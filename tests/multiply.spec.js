const { multiply } = require('./../calculator.js');
describe('Multiply', () => {
  test('should multiply two positive integers', () => {
    const result = multiply(4, 2);
    expect(result).toBe(8);
  });
  test('should multiply a positive and negative number', () => {
    const result = multiply(4, -2);
    expect(result).toBe(-8);
  });
  test('should multiply a number by 0', () => {
    const result = multiply(4, 0);
    expect(result).toBe(0);
  });
});
