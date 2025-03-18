import { createCompareFunction } from './ascend.js'

export function descend(getFunction) {
  return (a, b) => {
    const aValue = getFunction(a)
    const bValue = getFunction(b)

    return createCompareFunction(aValue, bValue, 1, -1)
  }
}
