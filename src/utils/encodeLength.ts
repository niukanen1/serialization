import {encodeBase62, BASE62_CHARS} from "./base62";

export function encodeLength(length: number): string {
  if (length < 62) {
    return BASE62_CHARS[length];
  } else {
    return '=' + encodeBase62(length);
  }
}
