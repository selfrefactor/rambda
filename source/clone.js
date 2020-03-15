export function clone(val){
  const out = Array.isArray(val) ? Array(val.length) : {}
  if (val && val.getTime) return new Date(val.getTime())

  for (const key in val){
    const v = val[ key ]
    out[ key ] =
      typeof v === 'object' && v !== null ?
        v.getTime ?
          new Date(v.getTime()) :
          clone(v) :
        v
  }

  return out
}
