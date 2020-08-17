import { anyFalse, mapToObject, match, remove, trim } from 'rambdax'

import { extractName } from './extract-name'
import { extractRawInfo } from './extract-raw-info'

export function getCategories(withRambdax){
  const hash = {}
  const rawInfo = extractRawInfo(withRambdax)

  mapToObject(x => {
    const name = extractName(x)
    const [ matched ] = match(/Categories:(\n|.)+Notes:/m)(x)
    if (anyFalse(matched, name)) return

    const categories = remove([ 'Categories:', 'Notes:' ])(matched)

    if (!categories) return
    categories
      .split(',')
      .map(trim)
      .forEach(category => {
        if (hash[ category ] === undefined){
          hash[ category ] = [ name ]
        } else {
          hash[ category ] = [ ...hash[ category ], name ]
        }
      })
  })(rawInfo)

  return hash
}
