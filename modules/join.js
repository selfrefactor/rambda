export default function join (glue, arr) {
  if (arr === undefined) {
    return arrHolder => join(glue, arrHolder)
  }

  return arr.join(glue)
}
