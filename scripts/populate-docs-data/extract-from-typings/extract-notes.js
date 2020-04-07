import { mapToObject, match, remove } from 'rambdax'

import { extractName } from './extract-name'
import { extractRawInfo } from './extract-raw-info'

export function extractNotes(){
  const rawInfo = extractRawInfo()

  return mapToObject(x => {
    const name = extractName(x)

    const [ matched ] = match(/Notes:(\n|.)+\*\//m)(x)
    if (!matched || !name) return false

    const notes = remove([ 'Notes:', '*/' ])(matched)

    return { [ name ] : notes.trim() }
  })(rawInfo)
}
