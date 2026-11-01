const linesRegexp = /[^\n]*\r?\n|[^\n]+$/g

export function lines(str) {
  const willReturn = str.match(linesRegexp) ?? []

  return willReturn.map((line) => line.replace(/\r?\n$/, ""))
}
