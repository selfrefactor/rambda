import { defaultTo } from './defaultTo.js'

export function getPropertyOrDefault(defaultValue, property) {
  return obj => {
    if (!obj) {
      return defaultValue
    }

    return defaultTo(defaultValue, obj[property])
  }
}
