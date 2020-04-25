import { filter, map, piped } from 'rambdax'

import { extractName } from './extract-name'
import { extractRawInfo } from './extract-raw-info'

export function getMethods(withRambdax = false){
  const rawInfo = extractRawInfo(withRambdax)

  return piped(
    rawInfo, map(extractName), filter(Boolean)
  )
}
