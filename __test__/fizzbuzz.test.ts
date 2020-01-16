import { fizzbuzz } from '../fizzbuzz';

describe('fizzbuzz', () => {
  it('Si n mod 3 = 0 devuelve "FIZZ"', () => {
    expect(fizzbuzz(3)).toBe('FIZZ');
    expect(fizzbuzz(6)).toBe('FIZZ');
    expect(fizzbuzz(63339)).toBe('FIZZ');
  });
  it('Si n mod 5 = 0 devuelve "BUZZ"', () => {
    expect(fizzbuzz(5)).toBe('BUZZ');
    expect(fizzbuzz(10)).toBe('BUZZ');
    expect(fizzbuzz(53242340)).toBe('BUZZ');
  });
  it.todo('Si n mod 3 = 0 y n mod 5 = 0 "FIZZBUZZ"');
  it.todo('si n no cumple las anteriores, devuelve n');
});
1;
