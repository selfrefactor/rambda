import { mapToObject, match, remove } from 'rambdax'

import { extractName } from './extract-name'
import { extractRawInfo } from './extract-raw-info'

export function extractExplanation(withRambdax){
  const rawInfo = extractRawInfo(withRambdax)

  return mapToObject(x => {
    const name = extractName(x)
    const [ matched ] = match(/Explanation:(\n|.)+Example:/m)(x)
    if (!matched || !name) return false

    const explanation = remove([ 'Explanation:', 'Example:' ])(matched)

    return { [ name ] : explanation.trim() }
  })(rawInfo)
}
