// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// PHONE NUMBER (format: 123-456-7890)
test('Valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('Valid phone number: 555-555-5555', () => {
  expect(isPhoneNumber('555-555-5555')).toBe(true);
});
test('Invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('Invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// EMAIL
test('Valid email: test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('Valid email: me123@ucsd.edu', () => {
  expect(isEmail('me123@ucsd.edu')).toBe(true);
});
test('Invalid email: test@.com', () => {
  expect(isEmail('test@.com')).toBe(false);
});
test('Invalid email: ucsd.edu', () => {
  expect(isEmail('ucsd.edu')).toBe(false);
});

// STRONG PASSWORD (starts with letter, >= 4 characters, only letters/numbers/_)
test('Valid strong password: abcd123', () => {
  expect(isStrongPassword('abcd123')).toBe(true);
});
test('Valid strong password: A_bigOne', () => {
  expect(isStrongPassword('A_bigOne')).toBe(true);
});
test('Invalid password: 123abc', () => {
  expect(isStrongPassword('123abc')).toBe(false);
});
test('Invalid password: ab', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// DATE (format: MM/DD/YYYY)
test('Valid date: 12/25/2023', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('Valid date: 1/1/2020', () => {
  expect(isDate('1/1/2020')).toBe(true);
});
test('Invalid date: 2023-12-25', () => {
  expect(isDate('2023-12-25')).toBe(false);
});
test('Invalid date format: 2023-01-01', () => {
  expect(isDate('2023-01-01')).toBe(false);
});


// HEX COLOR (e.g. #fff or #123456)
test('Valid hex color: #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('Valid hex color: #12A3BC', () => {
  expect(isHexColor('#12A3BC')).toBe(true);
});
test('Invalid hex color: #xyz', () => {
  expect(isHexColor('#xyz')).toBe(false);
});
test('Invalid hex color: #12G', () => {
  expect(isHexColor('#12G')).toBe(false);
});
