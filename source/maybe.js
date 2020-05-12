import { type } from './type'

export function maybe(
  ifRule, whenIfRaw, whenElseRaw
){
  const whenIf =
    ifRule && type(whenIfRaw) === 'Function' ? whenIfRaw() : whenIfRaw

  const whenElse =
    !ifRule && type(whenElseRaw) === 'Function' ? whenElseRaw() : whenElseRaw

  return ifRule ? whenIf : whenElse
}
