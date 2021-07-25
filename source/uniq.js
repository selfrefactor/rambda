import {_indexOf} from './_internals/_indexOf'

function _Set() {
  this._nativeSet = new Set()
  this._items = {}
}

_Set.prototype.add = function (item) {
  return !hasOrAdd(item, this)
}

function hasOrAdd(item, set) {
  var type = typeof item

  switch (type) {
    case 'string':
    case 'number':
      const prevSize = set._nativeSet.size
      set._nativeSet.add(item)
      return set._nativeSet.size === prevSize
    case 'boolean':
      if (type in set._items) {
        var bIdx = item ? 1 : 0
        if (set._items[type][bIdx]) {
          return true
        } else {
          set._items[type][bIdx] = true
          return false
        }
      } else {
        set._items[type] = item ? [false, true] : [true, false]
        return false
      }

    case 'undefined':
      if (set._items[type]) {
        return true
      } else {
        set._items[type] = true
        return false
      }

    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          set._items['null'] = true
          return false
        }
        return true
      }
    default:
      const itemType = item.toString()

      if (!(itemType in set._items)) {
        set._items[itemType] = [item]
        return false
      }
      if (_indexOf(item, set._items[itemType]) === -1) {
        set._items[itemType].push(item)
        return false
      }
      return true
  }
}

export function uniq(list) {
  const set = new _Set()
  const willReturn = []
  let idx = 0
  let item

  while (idx < list.length) {
    item = list[idx]
    if (set.add(item)) {
      willReturn.push(item)
    }
    idx += 1
  }
  return willReturn
}
