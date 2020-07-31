export function length(x){
  if (!x && x !== '' || x.length === undefined){
    return NaN
  }

  return x.length
}
