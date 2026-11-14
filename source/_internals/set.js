import { _indexOf } from '../equals.js'
import { type as typeMethod } from '../type.js'

const primitiveTypes = ['bigint', 'boolean', 'number', 'string', 'symbol']

export class _Set {
  constructor() {
    this.set = new Set()
    this.items = Object.create(null)
  }

  checkUniqueness(item) {
    const type = typeMethod(item)

    if (['Null', 'Undefined', 'NaN'].includes(type)) {
      if (Object.hasOwn(this.items, type)) {
        return false
      }
      this.items[type] = true

      return true
    }

    if (primitiveTypes.includes(typeof item)) {
      const prevSize = this.set.size
      this.set.add(item)

      return this.set.size !== prevSize
    }

    if (!Object.hasOwn(this.items, type)) {
      this.items[type] = [item]

      return true
    }

    if (_indexOf(item, this.items[type]) === -1) {
      this.items[type].push(item)

      return true
    }

    return false
  }
}
