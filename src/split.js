export function split(glue, str) {
  if (arguments.length === 1)
    return strHolder => split(glue, strHolder)

  return str.split(glue)
}
