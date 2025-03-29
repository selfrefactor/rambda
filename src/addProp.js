export function addProp(key, value) {
  return obj => ({ ...obj, [key]: value })
}
