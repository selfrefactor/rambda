export function merge(obj, props){
  if (arguments.length === 1) return _props => merge(obj, _props)

  return Object.assign(
    {}, obj || {}, props || {}
  )
}
