import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns string with amount as dollar value', () => {
    const amount = 20;
    const result = toDollars(amount);
    expect(result).toEqual('$20.00');
  });
});

describe('divideBy', () => {
  it('returns value after division', () => {
    const number = [10, 100, 1000, 10000];
    const divisor = 10;
    const result = divideBy(number, divisor);
    expect(result).toEqual([1, 10, 100, 1000]);
  });
});

describe('multiplyBy', () => {
  it('returns value after division', () => {
    const obj = { 1: 10, 2: 100, 3: 1000, 4: 10000 };
    const multiplier = 10;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ 1: 100, 2: 1000, 3: 10000, 4: 100000 });
  });
});
