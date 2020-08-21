import { anyFalse, mapToObject, match, remove, trim } from 'rambdax'

import { extractName } from './extract-name'
import { extractRawInfo } from './extract-raw-info'

export function extractCategories(withRambdax){
  const rawInfo = extractRawInfo(withRambdax)

  return mapToObject(x => {
    const name = extractName(x)
    const [ matched ] = match(/Categories:(\n|.)+Notes:/m)(x)
    if (anyFalse(matched, name)) return

    const categories = remove([ 'Categories:', 'Notes:' ])(matched)

    if (!categories) return

    return { [ name ] : categories.split(',').map(trim) }
  })(rawInfo)
}
