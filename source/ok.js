import {any} from './any'
import {glue} from './glue'
import {fromPrototypeToString, isValid} from './isValid'
import {map} from './map'
import {type} from './type'

export function schemaToString(schema) {
  if (type(schema) !== 'Object') {
    return fromPrototypeToString(schema).rule
  }

  return map(x => {
    const {rule, parsed} = fromPrototypeToString(x)
    const xType = type(x)

    if (xType === 'Function' && !parsed) return 'Function'

    return parsed ? rule : xType
  }, schema)
}

export function check(singleInput, schema) {
  return isValid({
    input: {singleInput},
    schema: {singleInput: schema},
  })
}

export function ok(...inputs) {
  return (...schemas) => {
    let failedSchema

    const anyError = any((singleInput, i) => {
      const schema = schemas[i] === undefined ? schemas[0] : schemas[i]

      const checked = check(singleInput, schema)
      if (!checked) {
        failedSchema = JSON.stringify({
          input: singleInput,
          schema: schemaToString(schema),
        })
      }

      return !checked
    }, inputs)

    if (anyError) {
      const errorMessage =
        inputs.length > 1
          ? glue(
              `
        Failed R.ok -
        reason: ${failedSchema}
        all inputs: ${JSON.stringify(inputs)}
        all schemas: ${JSON.stringify(schemas.map(schemaToString))}
      `,
              '\n'
            )
          : `Failed R.ok - ${failedSchema}`

      throw new Error(errorMessage)
    }
  }
}
