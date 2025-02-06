export function lens(getter, setter) {
  return functor => target =>
    functor(getter(target)).map(focus => setter(focus, target))
}
