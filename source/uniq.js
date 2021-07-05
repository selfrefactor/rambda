import { includes } from './includes'
import { uniq as uniqRamda } from 'ramda'

export function uniq(list){
  return uniqRamda(list)
  let index = -1
  const willReturn = []

  while (++index < list.length){
    const value = list[ index ]

    if (!includes(value, willReturn)){
      willReturn.push(value)
    }
  }

  return willReturn
}
