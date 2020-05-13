export function when(rule, ruleResult){
  if (arguments.length === 1){
    return whenTrueHolder => when(rule, whenTrueHolder)
  }

  return input => rule(input) ? ruleResult : input
}
