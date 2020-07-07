/* global require, test, expect */
const { getResult1 } = require("./index");
const { getResult2 } = require("./index");

// Exercise 2.1
describe('getResult1 checking...', () => {
  test("Multiplying", () => {
        expect(getResult1(4, 4, '*')).toBe(16);
  });

  test("Dividing", () => {
        expect(getResult1(7, 2, '/')).toBe(3.5);
  });

  test("Adding", () => {
        expect(getResult1(23, 45, '+')).toBe(68);
  });

  test("Subtraction", () => {
    expect(getResult1(61, 2, '-')).toBe(59);
  });
})

// Exercise 2.2
describe('getResult2 checking...', () => {
  test("Multiplying", () => {
        expect(getResult2(4, 4, '*')).toBe(16);
  });

  test("Dividing", () => {
        expect(getResult2(7, 2, '/')).toBe(3.5);
  });

  test("Adding", () => {
        expect(getResult2(23, 45, '+')).toBe(68);
  });

  test("Subtraction", () => {
    expect(getResult2(61, 2, '-')).toBe(59);
  });
})