import {decodeBase62, BASE62_CHARS} from "./base62";

export function decodeLength(str: string): { length: number; nextPos: number } {
  const first = str[0];
  if (first === '=') {
    const code = str.substr(1, 2);
    const length = decodeBase62(code);
    return { length, nextPos: 3 };
  } else {
    const length = BASE62_CHARS.indexOf(first);
    return { length, nextPos: 1 };
  }
}
