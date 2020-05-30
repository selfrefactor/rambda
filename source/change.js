//Its lodash's set method taken from
//https://github.com/lodash/lodash/blob/4.5.0-npm-packages
import { _isArray } from './_internals/_isArray'
import { set } from './_internals/set'
import { partition } from './partition'

const isObject = x => {
  const ok = x !== null && !_isArray(x) && typeof x === 'object'
  if (!ok){
    return false
  }

  return Object.keys(x).length > 0
}

export function change(
  origin, pathRaw, rules
){
  const willReturn = JSON.parse(JSON.stringify(origin))

  if (!isObject(rules)){
    set(
      willReturn, pathRaw, rules
    )

    return willReturn
  }
  const path = pathRaw === '' ? '' : `${ pathRaw }.`

  for (const ruleKey of Object.keys(rules)){
    const rule = rules[ ruleKey ]
    if (!isObject(rule)){
      set(
        willReturn, `${ path }${ ruleKey }`, rule
      )
      continue
    }
    const [ withObjects, withoutObjects ] = partition(subruleKey => isObject(rule[ subruleKey ]),
      Object.keys(rule))

    withoutObjects.forEach(subruleKey => {
      const subrule = rule[ subruleKey ]
      set(
        willReturn, `${ path }${ ruleKey }.${ subruleKey }`, subrule
      )
    })

    withObjects.forEach(subruleKey => {
      const subrule = rule[ subruleKey ]
      Object.keys(subrule).forEach(deepKey => {
        const deep = rule[ subruleKey ][ deepKey ]

        if (!isObject(deep)){
          return set(
            willReturn,
            `${ path }${ ruleKey }.${ subruleKey }.${ deepKey }`,
            deep
          )
        }

        Object.keys(deep).forEach(superDeepKey => {
          const superDeep = rule[ subruleKey ][ deepKey ][ superDeepKey ]

          set(
            willReturn,
            `${ path }${ ruleKey }.${ subruleKey }.${ deepKey }.${ superDeepKey }`,
            superDeep
          )
        })
      })
    })
  }

  return willReturn
}
