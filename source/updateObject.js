import { assocPath } from './assocPath.js'

export function updateObject(rules, obj){
  if (arguments.length === 1) return _obj => updateObject(rules, _obj)

  let clone = { ...obj } /*?.*/

  rules.forEach(([ objectPath, newValue ]) => {
    clone = assocPath(
      objectPath, newValue, clone
    )
  })

  return clone
}
