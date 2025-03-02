export function assocFn(prop, newValue) {
  return obj => Object.assign({}, obj, { [prop]: newValue })
}
