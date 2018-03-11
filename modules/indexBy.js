export default function indexBy(fn, list) {
  if (list === undefined) {
    
    return list => indexBy(fn, list)
  }
  const result = {}
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    result[fn(item)] = item
  }

  return result
}
