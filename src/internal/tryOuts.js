export function isNumberA(x){
  return Number.isInteger(x) && x > 0
}

export function isNumberB(x){
  if (x == null) return false

  return !Number.isNaN(Number(x))
}

export function isNumberC(x){
  if (x == null) return false

  return !Number.isNaN(Number(x))
}

