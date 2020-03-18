import { anyFalse, mapToObject, match, remove, replace } from 'rambdax'

import { extractName } from './extract-name'
import { extractRawInfo } from './extract-raw-info'

const skipExampleList = [ 'mapAsync' ]

export function extractExample(){
  const rawInfo = extractRawInfo()

  return mapToObject(x => {
    const name = extractName(x)
    const [ matched ] = match(/Example:(\n|.)+Categories:/m)(x)

    if (anyFalse(
      matched, name, !skipExampleList.includes(name)
    )) return

    const exampleRaw = remove([ 'Categories:', 'Example:' ])(matched)
    const example = replace(
      '```', '```javascript', exampleRaw
    )

    return { [ name ] : example.trim() }
  })(rawInfo)
}
