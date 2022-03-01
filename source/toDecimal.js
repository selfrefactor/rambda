export function toDecimal(number, charsAfterDecimalPoint = 2){
  return Number(parseFloat(String(number)).toFixed(charsAfterDecimalPoint))
}
