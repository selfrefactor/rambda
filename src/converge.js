import { curryN } from './curryN'
import { map } from './map'
import { max } from './max'
import { reduce } from './reduce'

export function converge(fn, transformers){
  if (arguments.length === 1)
    return _transformers => converge(fn, _transformers)

  const highestArity = reduce(
    (a, b) => max(a, b.length), 0, transformers
  )

  return curryN(highestArity, function (){
    return fn.apply(this,
      map(g => g.apply(this, arguments), transformers))
  })
}
