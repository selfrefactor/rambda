function join(glue, arr) {
  if (arr === undefined) {
    return holder => join(glue, holder)
  }

  return arr.join(glue)
}

module.exports = join
