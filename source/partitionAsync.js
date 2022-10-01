import { isArray } from './_internals/isArray.js'

async function whenObject(predicate, input){
  const yes = {}
  const no = {}
  Object.entries(input).forEach(([ prop, value ]) => {
    if (predicate(value, prop)){
      yes[ prop ] = value
    } else {
      no[ prop ] = value
    }
  })

  return [ yes, no ]
}

async function partitionAsyncFn(predicate, input){
  if (!isArray(input)) return whenObject(predicate, input)

  const yes = []
  const no = []
  for (const i in input){
    const predicateResult = await predicate(input[ i ], Number(i))
    if (predicateResult){
      yes.push(input[ i ])
    } else {
      no.push(input[ i ])
    }
  }

  return [ yes, no ]
}

export function partitionAsync(predicate, list){
  if (arguments.length === 1){
    return async _list => partitionAsyncFn(predicate, _list)
  }

  return new Promise((resolve, reject) => {
    partitionAsyncFn(predicate, list).then(resolve)
      .catch(reject)
  })
}
