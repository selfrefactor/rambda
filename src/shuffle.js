import { cloneList } from './_internals/cloneList.js'

export function shuffle(listInput) {
  const list = cloneList(listInput)
  let counter = list.length
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter)
    counter--
    const temp = list[counter]
    list[counter] = list[index]
    list[index] = temp
  }

  return list
}
