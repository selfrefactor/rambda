import { includes } from './includes'

export function pushUniq(x, list){
  if (includes(x, list)) return

  list.push(x)
}
