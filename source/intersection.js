import { filter } from './filter.js'
import { includes } from './includes.js'

export function intersection(listA) {
  return listB => filter(x => includes(x)(listA))(listB)
}
