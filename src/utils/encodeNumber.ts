import {encodeBase62, BASE62_CHARS} from "./base62";

export function encodeNumber(n: number): string {
  const val = n - 1;
  if (val < 62) {
    return BASE62_CHARS[val];
  } else {
    return '=' + encodeBase62(val);
  }
}
