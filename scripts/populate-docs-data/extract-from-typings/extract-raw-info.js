import { match } from 'rambdax'

import { getOrigin } from '../../utils'

export function extractRawInfo(withRambdax = false){
  return match(/\/\*(\n|[^@])+/gm, getOrigin(withRambdax))
}
