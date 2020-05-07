export function lens(getter, setter){
  if (arguments.length === 1) return _setter => lens(getter, _setter)

  return function (functor){
    return function (target){
      return functor(getter(target)).map(focus => setter(focus, target))
    }
  }
}
