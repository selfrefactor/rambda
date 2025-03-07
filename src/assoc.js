export function assoc(prop, newValue) {
  return obj => Object.assign({}, obj, { [prop]: newValue })
}
