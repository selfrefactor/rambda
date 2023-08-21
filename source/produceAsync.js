import { map } from './map.js'
import { type } from './type.js'

function promisify({ condition, input, prop }){
  return new Promise((resolve, reject) => {
    if (type(condition) !== 'Promise')
      return resolve({
        payload : condition(input),
        type    : prop,
      })

    condition(input)
      .then(result => {
        resolve({
          payload : result,
          type    : prop,
        })
      })
      .catch(err => reject(err))
  })
}

function produceFn(conditions, input){
  let asyncConditionsFlag = false
  for (const prop in conditions)
    if (
      asyncConditionsFlag === false &&
      type(conditions[ prop ]) === 'Promise'
    )
      asyncConditionsFlag = true

  if (asyncConditionsFlag === false){
    const willReturn = {}
    for (const prop in conditions) willReturn[ prop ] = conditions[ prop ](input)

    return Promise.resolve(willReturn)
  }

  const promised = []
  for (const prop in conditions){
    const condition = conditions[ prop ]
    promised.push(promisify({
      condition,
      input,
      prop,
    }))
  }

  return new Promise((resolve, reject) => {
    Promise.all(promised)
      .then(results => {
        const willReturn = {}

        map(result => willReturn[ result.type ] = result.payload, results)

        resolve(willReturn)
      })
      .catch(err => reject(err))
  })
}

export function produceAsync(conditions, input){
  if (arguments.length === 1)
    return async _input => produceFn(conditions, _input)

  return new Promise((resolve, reject) => {
    produceFn(conditions, input).then(resolve)
      .catch(reject)
  })
}
