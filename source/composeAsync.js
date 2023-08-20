import { pipeAsync } from './pipeAsync.js'

export function composeAsync(...fnList){
  return pipeAsync(...fnList.reverse())
}