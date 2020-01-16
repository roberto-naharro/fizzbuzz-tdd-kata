const checkDivideBy = (def: { [n: number]: string | number }) => (
  checkN: number,
): string | number =>
  Object.keys(def)
    .sort()
    .reduce(
      (prev: undefined | string, divisor) =>
        checkN % Number(divisor) === 0
          ? prev
            ? (prev += def[divisor])
            : def[divisor]
          : prev,
      undefined,
    );

export function fizzbuzz(n: number): string | number {
  return checkDivideBy({
    3: 'FIZZ',
    5: 'BUZZ',
  })(n);
}
