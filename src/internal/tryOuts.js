function isNumberA(x){
  return Number.isInteger(x) && x > 0
}

function isNumberB(x){
  if (x == null) return false

  return !Number.isNaN(Number(x))
}

function isNumberC(x){
  if (x == null) return false

  return !Number.isNaN(Number(x))
}

exports.isNumberA = isNumberA
exports.isNumberC = isNumberC
exports.isNumberB = isNumberB
