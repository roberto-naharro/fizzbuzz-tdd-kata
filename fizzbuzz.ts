export function fizzbuzz(n: number): string | number {
  if (n % 3 === 0) {
    return 'FIZZ';
  }
  if (n % 5 === 0) {
    return 'BUZZ';
  }
}
