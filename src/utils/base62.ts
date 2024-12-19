export const BASE62_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export function decodeBase62(str: string): number {
  const high = BASE62_CHARS.indexOf(str[0]);
  const low = BASE62_CHARS.indexOf(str[1]);
  return high * 62 + low;
}

export function encodeBase62(num: number): string {
  const high = Math.floor(num / 62);
  const low = num % 62;
  return BASE62_CHARS[high] + BASE62_CHARS[low];
}

