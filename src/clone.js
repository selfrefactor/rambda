export function clone(objOrArr) {
  const out = Array.isArray(objOrArr) ? Array(objOrArr.length) : {}

  for (const key in objOrArr) {
    let v = objOrArr[key]
    out[key] =
      typeof v === 'object' && v !== null
        ? v.getTime
          ? new Date(v.getTime())
          : clone(v)
        : v
  }

  return out
}
