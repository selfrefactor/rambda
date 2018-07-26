export default function nth (index, list) {
  if (list === undefined) {
    return listHolder => nth(index, listHolder)
  }
  const idx = index < 0 ? list.length + index : index
  
  return Object.prototype.toString.call(list) === '[object String]' ? 
    list.charAt(idx) : 
    list[idx]
}
