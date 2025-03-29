export function prop(searchProperty) {
  return obj => (obj ? obj[searchProperty] : undefined)
}
