import { drop } from './drop'

export function tail(listOrString){
  return drop(1, listOrString)
}
