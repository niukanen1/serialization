import {decodeBase62, BASE62_CHARS} from "./base62";

export function decodeNumber(str: string, pos: number): { value: number; nextPos: number } {
  const ch = str[pos];
  if (ch === '=') {
    const code = str.substr(pos+1, 2);
    const val = decodeBase62(code);
    return { value: val + 1, nextPos: pos+3 };
  } else {
    const val = BASE62_CHARS.indexOf(ch);
    return { value: val + 1, nextPos: pos+1 };
  }
}
