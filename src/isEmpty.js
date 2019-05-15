export function isEmpty(x) {
  if (Number.isFinite(x) || !x) {
    return true;
  }

  if (Array.isArray(x)) {
    return x.length === 0;
  }

  return Object.keys(x).length === 0;
}
