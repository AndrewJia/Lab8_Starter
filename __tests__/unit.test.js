// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('matches valid phone numbers', () => {
  expect(functions.isPhoneNumber('123-123-1234')).toBe(true);
	expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
});
test('detect invalid phone number character', () => {
  expect(functions.isPhoneNumber('abc-abc-abcd')).toBe(false);
});
test('detect invalid phone number length', () => {
  expect(functions.isPhoneNumber('1234-123-124')).toBe(false);
});

test('matches valid email', () => {
  expect(functions.isEmail('a@b.com')).toBe(true);
	expect(functions.isEmail('com@com.cc')).toBe(true);
});
test('detect invalid email character', () => {
  expect(functions.isEmail('~~@||.com')).toBe(false);
});
test('detect invalid email missing character', () => {
  expect(functions.isEmail('@@@.com')).toBe(false);
});

test('strong password', () => {
  expect(functions.isStrongPassword('a142412')).toBe(true);
	expect(functions.isStrongPassword('cccc')).toBe(true);
	expect(functions.isStrongPassword('')).toBe(false);
	expect(functions.isStrongPassword('cccc____________________________________')).toBe(false);
});

test('date', () => {
  expect(functions.isDate('1/1/1111')).toBe(true);
	expect(functions.isDate('22/22/2222')).toBe(true);
	expect(functions.isDate('33/33/33333')).toBe(false);
	expect(functions.isDate('//')).toBe(false);
});

test('hex color', () => {
  expect(functions.isHexColor('111111')).toBe(true);
	expect(functions.isHexColor('aaa')).toBe(true);
	expect(functions.isHexColor('33/33/33333')).toBe(false);
	expect(functions.isHexColor('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe(false);
});