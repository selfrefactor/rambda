export function unless(predicate, whenFalseFn) {
  return input => {
    if (predicate(input)) {
      return input
    }

    return whenFalseFn(input)
  }
}
