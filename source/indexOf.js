import { _indexOf } from "./_internals/_indexOf"

export function indexOf(valueToFind, list){
  if (arguments.length === 1){
    return _list => indexOf(valueToFind, _list)
  }

  return _indexOf(valueToFind, list)
}
