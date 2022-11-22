// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('phone number with ()',
    () => expect(functions.isPhoneNumber("(123) 456-7890")).toBe(true));
test('phone number with -',
    () => expect(functions.isPhoneNumber("123-456-7890")).toBe(true));
test('phone number with one less digit',
    () => expect(functions.isPhoneNumber("123-456-789")).toBe(false));
test('phone number with letter',
    () => expect(functions.isPhoneNumber("123-456-789O")).toBe(false));

// isEmail
test('email with number in name',
    () => expect(functions.isEmail("abc1def@gmail.com")).toBe(true));
test('email with _',
    () => expect(functions.isEmail("abc_def@gmail.com")).toBe(true));
test('email without domain',
    () => expect(functions.isEmail("asdfasdjfk@")).toBe(false));
test('email without @',
    () => expect(functions.isEmail("wfs#sdf.sdf")).toBe(false));

// isStrongPassword
test('password with 4 letters',
    () => expect(functions.isStrongPassword("abcd")).toBe(true));
test('password with 14 letters',
    () => expect(functions.isStrongPassword("sjdfkjlskfdksk")).toBe(true));
test('password with 3 letters',
    () => expect(functions.isStrongPassword("asd")).toBe(false));
test('password start with number',
    () => expect(functions.isStrongPassword("1sdfgs")).toBe(false));

// isDate
test('date with all zeros',
    () => expect(functions.isDate("00/00/0000")).toBe(true));
test('date with all nines',
    () => expect(functions.isDate("99/99/9999")).toBe(true));
test('date with two-digit year',
    () => expect(functions.isDate("00/00/00")).toBe(false));
test('date start with -',
    () => expect(functions.isDate("00-00-0000")).toBe(false));

// isHexColor
test('color with # and 6 digits',
    () => expect(functions.isHexColor("#1a2b3c")).toBe(true));
test('color without # and has 3 digits',
    () => expect(functions.isHexColor("789")).toBe(true));
test('color with digit over F',
    () => expect(functions.isHexColor("XYZ")).toBe(false));
test('color with more than 6 digits',
    () => expect(functions.isHexColor("1111111")).toBe(false));