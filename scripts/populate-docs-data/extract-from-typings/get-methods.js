import { filter, map, piped } from 'rambdax'

import { extractName } from './extract-name'
import { extractRawInfo } from './extract-raw-info'

export function getMethods(){
  const rawInfo = extractRawInfo()

  return piped(
    rawInfo, map(extractName), filter(Boolean)
  )
}
