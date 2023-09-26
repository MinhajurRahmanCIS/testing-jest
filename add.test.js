const add = require('./add')

test('Summation of two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
});