import { isArray } from './_internals/isArray.js'
import { all } from './all.js'
import { any } from './any.js'
import { includes } from './includes.js'
import { init } from './init.js'
import { test } from './test.js'
import { toLower } from './toLower.js'
import { type } from './type.js'

export function isPrototype(input){
  const currentPrototype = input.prototype
  const list = [ Number, String, Boolean, Promise ]
  let toReturn = false
  let counter = -1
  while (++counter < list.length && !toReturn){
    if (currentPrototype === list[ counter ].prototype) toReturn = true
  }

  return toReturn
}

export function prototypeToString(input){
  const currentPrototype = input.prototype
  const list = [ Number, String, Boolean, Promise ]
  const translatedList = [ 'Number', 'String', 'Boolean', 'Promise' ]
  let found
  let counter = -1

  while (++counter < list.length){
    if (currentPrototype === list[ counter ].prototype) found = counter
  }

  return translatedList[ found ]
}

const typesWithoutPrototype = [ 'any', 'promise', 'async', 'function' ]

export function fromPrototypeToString(rule){
  if (
    isArray(rule) ||
    rule === undefined ||
    rule === null ||
    rule.prototype === undefined ||
    typesWithoutPrototype.includes(rule)
  ){
    return {
      rule,
      parsed : false,
    }
  }
  if (String.prototype === rule.prototype){
    return {
      rule   : 'string',
      parsed : true,
    }
  }
  if (Boolean.prototype === rule.prototype){
    return {
      rule   : 'boolean',
      parsed : true,
    }
  }
  if (Number.prototype === rule.prototype){
    return {
      rule   : 'number',
      parsed : true,
    }
  }

  return {
    rule   : type(rule.prototype).toLowerCase(),
    parsed : true,
  }
}

function getRuleAndType(schema, requirementRaw){
  const ruleRaw = schema[ requirementRaw ]
  const typeIs = type(ruleRaw)
  const { rule, parsed } = fromPrototypeToString(ruleRaw)

  return {
    rule,
    ruleType : parsed ? 'String' : typeIs,
  }
}

export function isValid({ input, schema }){
  if (input === undefined || schema === undefined) return false

  let flag = true
  const boom = boomFlag => {
    if (!boomFlag){
      flag = false
    }
  }

  for (const requirementRaw in schema){
    if (flag){
      const isOptional = requirementRaw.endsWith('?')
      const requirement = isOptional ? init(requirementRaw) : requirementRaw

      const { rule, ruleType } = getRuleAndType(schema, requirementRaw)
      const inputProp = input[ requirement ]
      const inputPropType = type(input[ requirement ])

      const ok = isOptional && inputProp !== undefined || !isOptional

      if (!ok || rule === 'any' && inputProp != null || rule === inputProp)
        continue

      if (ruleType === 'Object'){
        /**
         * This rule is standalone schema, so we recursevly call `isValid`
         */
        const isValidResult = isValid({
          input  : inputProp,
          schema : rule,
        })
        boom(isValidResult)
      } else if (ruleType === 'String'){
        /**
         * Rule is actual rule such as 'number', so the two types are compared
         */
        boom(toLower(inputPropType) === rule)
      } else if (typeof rule === 'function'){
        /**
         * Rule is function so we pass to it the input
         */
        boom(rule(inputProp))
      } else if (ruleType === 'Array' && inputPropType === 'String'){
        /**
         * Enum case | rule is like a: ['foo', 'bar']
         */
        boom(includes(inputProp, rule))
      } else if (
        ruleType === 'Array' &&
        rule.length === 1 &&
        inputPropType === 'Array'
      ){
        /**
         * 1. array of type | rule is like a: ['number']
         * 2. rule is like a: [{foo: 'string', bar: 'number'}]
         */
        const [ currentRule ] = rule
        const currentRuleType = type(currentRule)

        //Check if rule is invalid
        boom(currentRuleType === 'String' ||
            currentRuleType === 'Object' ||
            isPrototype(currentRule))

        if (currentRuleType === 'Object' && flag){
          /**
           * 2. rule is like a: [{from: 'string'}]
           */
          const isValidResult = all(inputPropInstance =>
            isValid({
              input  : inputPropInstance,
              schema : currentRule,
            }),
          inputProp)
          boom(isValidResult)
        } else if (flag){
          /**
           * 1. array of type
           */

          const actualRule =
            currentRuleType === 'String' ?
              currentRule :
              prototypeToString(currentRule)
          const isInvalidResult = any(inputPropInstance =>
            type(inputPropInstance).toLowerCase() !==
              actualRule.toLowerCase(),
          inputProp)
          boom(!isInvalidResult)
        }
      } else if (ruleType === 'RegExp' && inputPropType === 'String'){
        boom(test(rule, inputProp))
      } else {
        boom(false)
      }
    }
  }

  return flag
}
