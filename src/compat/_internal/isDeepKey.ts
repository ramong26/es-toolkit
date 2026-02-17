/**
 * Checks if a given key is a deep key.
 *
 * A deep key is a string that contains a dot (.) or square brackets with a property accessor.
 *
 * @param {PropertyKey} key - The key to check.
 * @returns {boolean} - Returns true if the key is a deep key, otherwise false.
 *
 * Examples:
 *
 * isDeepKey('a.b') // true
 * isDeepKey('a[b]') // true
 * isDeepKey('a') // false
 * isDeepKey(123) // false
 * isDeepKey('a.b.c') // true
 * isDeepKey('a[b][c]') // true
 * isDeepKey('a.') // false
 * isDeepKey('.a') // false
 * isDeepKey('a[b') // false
 * isDeepKey('a]b]') // false
 * isDeepKey('a][b') // false
 */
export function isDeepKey(key: PropertyKey): boolean {
  if (typeof key === 'number' || typeof key === 'symbol') {
    return false;
  }

  if (typeof key === 'string') {
    const dotIndex = key.indexOf('.');
    if (dotIndex > 0 && dotIndex < key.length - 1) {
      return true;
    }

    let leftBracketIndex = key.indexOf('[');
    let rightBracketIndex = key.indexOf(']');
    if (leftBracketIndex !== -1 && rightBracketIndex !== -1 && leftBracketIndex < rightBracketIndex) {
      return true;
    }

    return false;
  }
  return false;
}
