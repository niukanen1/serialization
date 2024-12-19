import { encodeLength, decodeLength, encodeNumber, decodeNumber } from './utils';

export function serialize(numbers: number[]): string {
  for (const n of numbers) {
    if (n < 1 || n > 300) {
      throw new Error(`Number out of range [1..300]: ${n}`);
    }
  }
  const lengthEncoded = encodeLength(numbers.length);
  const encodedNumbers = numbers.map(encodeNumber).join('');
  return lengthEncoded + encodedNumbers;
}

export function deserialize(str: string): number[] {
  const { length, nextPos } = decodeLength(str);
  let pos = nextPos;
  const result: number[] = [];
  for (let i = 0; i < length; i++) {
    const { value, nextPos } = decodeNumber(str, pos);
    result.push(value);
    pos = nextPos;
  }
  return result;
}
