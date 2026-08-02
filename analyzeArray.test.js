import { analyzeArray } from "./analyzeArray";

test('analyzes an array of positive numbers correctly', ()=>{
    const res = analyzeArray([1, 8, 3, 4, 2, 6]);

    expect(res).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test('handles an array with a single element', () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test('handles negative numbers correctly', () => {
  expect(analyzeArray([-10, -2, -3])).toEqual({
    average: -5,
    min: -10,
    max: -2,
    length: 3,
  });
});