export const smallArray = [1,2,3];
export const mixedArray = [1,10,300,59,62,63];

function generateRandomArray(length: number): number[] {
  const arr: number[] = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 300) + 1);
  }
  return arr;
}

export const random50 = generateRandomArray(50);
export const random100 = generateRandomArray(100);
export const random500 = generateRandomArray(500);
export const random1000 = generateRandomArray(1000);

export const singleDigitArray = Array.from({length: 9}, (_, i) => i+1);
export const twoDigitArray = Array.from({length: 90}, (_, i) => i+10);
export const threeDigitArray = Array.from({length: 201}, (_, i) => i+100);
export const tripleAllNumbers = Array.from({length: 300}, (_, i) => i+1)
  .flatMap(num => [num, num, num]);
