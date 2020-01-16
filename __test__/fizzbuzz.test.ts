import { fizzbuzz } from '../fizzbuzz';

describe('fizzbuzz', () => {
  const testFizzBuzz = (n, s: 'FIZZ' | 'BUZZ' | 'FIZZBUZZ') =>
    expect(fizzbuzz(n)).toBe(s);

  it('Si n mod 3 = 0 devuelve "FIZZ"', () => {
    const testFizz = n => testFizzBuzz(n, 'FIZZ');

    testFizz(3);
    testFizz(6);
    testFizz(63339);
  });
  it('Si n mod 5 = 0 devuelve "BUZZ"', () => {
    const testBuzz = n => testFizzBuzz(n, 'BUZZ');

    testBuzz(5);
    testBuzz(10);
    testBuzz(53242340);
  });
  it('Si n mod 3 = 0 y n mod 5 = 0 "FIZZBUZZ"', () => {
    const testBoth = n => testFizzBuzz(n, 'FIZZBUZZ');

    testBoth(15);
    testBoth(30);
    testBoth(230 * 3 * 5);
  });
  it('si n no cumple las anteriores, devuelve n', () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(4)).toBe(4);
    expect(fizzbuzz(7)).toBe(7);
  });
});
1;
