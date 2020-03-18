export function nth(offset, list){
  if (arguments.length === 1) return _list => nth(offset, _list)

  const idx = offset < 0 ? list.length + offset : offset

  return Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[ idx ]
}
