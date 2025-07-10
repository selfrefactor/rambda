import { defaultTo } from './defaultTo.js'

export function propOr(property, defaultValue) {
  return obj => {
    if (!obj) {
      return defaultValue
    }

    return defaultTo(defaultValue)(obj[property])
  }
}
