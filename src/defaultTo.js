function isFalsy(input) {
  return input === undefined || input === null || Number.isNaN(input) === true
}

export function defaultTo(defaultArgument) {
  return input => isFalsy(input) ? defaultArgument : input
}
