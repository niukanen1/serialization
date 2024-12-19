import { serialize, deserialize } from '../src';
import {
  smallArray, mixedArray, random50, random100, random500, random1000,
  singleDigitArray, twoDigitArray, threeDigitArray, tripleAllNumbers
} from './test-data';

describe('Serialization/Deserialization Tests', () => {
  const testCases: {name: string, data: number[]}[] = [
    { name: 'smallArray', data: smallArray },
    { name: 'mixedArray', data: mixedArray },
    { name: 'random50', data: random50 },
    { name: 'random100', data: random100 },
    { name: 'random500', data: random500 },
    { name: 'random1000', data: random1000 },
    { name: 'singleDigitArray', data: singleDigitArray },
    { name: 'twoDigitArray', data: twoDigitArray },
    { name: 'threeDigitArray', data: threeDigitArray },
    { name: 'tripleAllNumbers', data: tripleAllNumbers },
  ];

  for (const tc of testCases) {
    it(`should serialize and deserialize ${tc.name}`, () => {
      const serialized = serialize(tc.data);
      const deserialized = deserialize(serialized);
      expect(deserialized).toEqual(tc.data);
    });
  }
});
