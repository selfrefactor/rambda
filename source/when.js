export function when(predicate, whenTrueFn) {
  return input => {
    if (!predicate(input)) {
      return input
    }

    return whenTrueFn(input)
  }
}
