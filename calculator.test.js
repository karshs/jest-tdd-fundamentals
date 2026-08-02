import { calculator } from "./calculator";

test('add two numbers', () => {
    expect(calculator.add(3,4)).toBe(7);
});

test('adds negative and positive numbers', () => {
  expect(calculator.add(-10, 5)).toBe(-5);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('divides two numbers cleanly', () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test('throws and error when dividing by zero', () =>{
    expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
})