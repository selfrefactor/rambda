import { uniq } from './uniq.js'

export function union(listA) {
  return listB => uniq([...listA, ...listB])
}
