import { Dictionary, filter } from 'rambda'

function dropEmpty<T>(input : readonly T[] | Dictionary<T>) {
  if (input instanceof Array) { // <-- this check is necessary to calm down the TS compiler ... @_@
    return filter<T>(Boolean, input) // <-- notice the same
  } else {
    return filter<T>(Boolean, input) // <-- code...
  }
  // return filter<T>(Boolean, input)
}

describe('R.dropEmpty', () => {
  it('happy', () => {
    const list = [1,2,3, '']
    const result: any = dropEmpty(list)
    
    result // $ExpectType any
  })
})