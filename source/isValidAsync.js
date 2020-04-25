import { forEach } from './forEach'
import { isPromise } from './isPromise'
import { isValid } from './isValid'

export async function isValidAsync({ schema, input }){
  const asyncSchema = {}
  const simpleSchema = {}
  forEach((rule, prop) => {
    if (isPromise(rule)){
      asyncSchema[ prop ] = rule
    } else {
      simpleSchema[ prop ] = rule
    }
  }, schema)

  if (Object.keys(asyncSchema).length === 0)
    return isValid({
      input,
      schema,
    })

  if (
    !isValid({
      input,
      schema : simpleSchema,
    })
  )
    return false

  let toReturn = true

  for (const singleRuleProp in asyncSchema){
    if (toReturn){
      const validated = await asyncSchema[ singleRuleProp ](input[ singleRuleProp ])
      if (!validated) toReturn = false
    }
  }

  return toReturn
}
