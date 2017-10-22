
export default function split (glue, str) {
  if (str === undefined) {
    return strHolder => split(glue, strHolder)
  }

  return str.split(glue)
}
