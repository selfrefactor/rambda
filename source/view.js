const Const = x => ({
  map : fn => Const(x),
  x,
})

export function view(lens, target){
  if (arguments.length === 1) return _target => view(lens, _target)

  return lens(Const)(target).x
}
