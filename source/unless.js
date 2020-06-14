export function unless(condition, whenFalse){
  if (arguments.length === 1){
    return whenFalseHolder => unless(condition, whenFalseHolder)
  }

  return input => {
    if (condition(input)) return input

    return whenFalse(input)
  }
}
