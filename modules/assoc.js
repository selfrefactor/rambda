export default function assoc (prop, value, obj) {
  switch (arguments.length) {

  case 0:
    return assoc
  case 1:
    return (value, obj) => assoc(prop, value, obj)
  case 2:
    return obj => assoc(prop, value, obj)
  default:
    return Object.assign({}, obj, {[prop]: value})

  }
}
