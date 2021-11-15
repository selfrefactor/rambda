import {_indexOf} from './equals'

export function indexOf(valueToFind, list) {
  if (arguments.length === 1) {
    return _list => _indexOf(valueToFind, _list)
  }

  return _indexOf(valueToFind, list)
}
