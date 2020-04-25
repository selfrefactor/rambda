import { match } from 'rambdax'

import { ORIGIN } from '../constants'

export function extractRawInfo(){
  return match(/\/\*(\n|[^@])+/gm, ORIGIN)
}
