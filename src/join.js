export function join(glue, arr) {
  if (arguments.length === 1) {
    return arrHolder => join(glue, arrHolder)
  }

  return arr.join(glue)
}
