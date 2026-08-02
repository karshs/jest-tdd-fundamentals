import { caesarCipher } from "./caesarCipher";

test('shifts lowercase letters by 3', () => {
    expect(caesarCipher("abc", 3)).toBe("def");
})

test('wraps from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves uppercase and lowercase letters', () => {
  expect(caesarCipher('heLLo', 3)).toBe('khOOr');
});

test('leaves punctuation, spaces, and numbers unchanged', () => {
  expect(caesarCipher('Hello, World! 123', 3)).toBe('Khoor, Zruog! 123');
});

test('Handles large shift factors', () =>{
    expect(caesarCipher('abc', 29)).toBe('def');
})