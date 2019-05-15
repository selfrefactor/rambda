export function isEmpty(x) {
  if (!x) {
    return true;
  }

  if (Array.isArray(x)) {
    return x.length === 0;
  }

  return Object.keys(x).length === 0;
}
