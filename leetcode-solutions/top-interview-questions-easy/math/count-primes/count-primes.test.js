const { countPrimes } = require("./count-primes");

describe("countPrimes", () => {
  test("Example test case 1", () => {
    expect(countPrimes(10)).toBe(4);
  });

  test("First 30 numbers", () => {
    expect(countPrimes(0)).toBe(0);
    expect(countPrimes(1)).toBe(0);
    expect(countPrimes(2)).toBe(0);
    expect(countPrimes(3)).toBe(1);
    expect(countPrimes(4)).toBe(2);
    expect(countPrimes(5)).toBe(2);
    expect(countPrimes(6)).toBe(3);
    expect(countPrimes(7)).toBe(3);
    expect(countPrimes(8)).toBe(4);
    expect(countPrimes(9)).toBe(4);
    expect(countPrimes(10)).toBe(4);
    expect(countPrimes(11)).toBe(4);
    expect(countPrimes(12)).toBe(5);
    expect(countPrimes(13)).toBe(5);
    expect(countPrimes(14)).toBe(6);
    expect(countPrimes(15)).toBe(6);
    expect(countPrimes(16)).toBe(6);
    expect(countPrimes(17)).toBe(6);
    expect(countPrimes(18)).toBe(7);
    expect(countPrimes(19)).toBe(7);
    expect(countPrimes(20)).toBe(8);
    expect(countPrimes(21)).toBe(8);
    expect(countPrimes(22)).toBe(8);
    expect(countPrimes(23)).toBe(8);
    expect(countPrimes(24)).toBe(9);
    expect(countPrimes(25)).toBe(9);
    expect(countPrimes(26)).toBe(9);
    expect(countPrimes(27)).toBe(9);
    expect(countPrimes(28)).toBe(9);
    expect(countPrimes(29)).toBe(9);
    expect(countPrimes(30)).toBe(10);
  });

  test("Very high number", () => {
    expect(countPrimes(150)).toBe(35);
  });
});