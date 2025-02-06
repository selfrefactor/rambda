export function toDecimal(number, charsAfterDecimalPoint = 2) {
	return Number(Number.parseFloat(String(number)).toFixed(charsAfterDecimalPoint));
}
