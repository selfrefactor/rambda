import { match } from 'rambdax'

import { getOrigin } from '../constants'

export function extractRawInfo(withRambdax = false){
  return match(/\/\*(\n|[^@])+/gm, getOrigin(withRambdax))
}
