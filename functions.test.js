import { capitalize, reverseString } from "./functions";

test('Capitalizes the first letter of a standard string', () => {
    expect(capitalize("vadodara")).toBe("Vadodara");
});

test('Capitalize single letter', () => {
    expect(capitalize("a")).toBe(("A"));
});
test('Capitalize single letter', () => {
    expect(capitalize("a")).toBe(("A"));
});

test('Remains same of already capital', () => {
    expect(capitalize("Node")).toBe(("Node"));
});

test('reverses a standard string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses a string with numbers and punctuation', () => {
  expect(reverseString('123 abc!')).toBe('!cba 321');
});