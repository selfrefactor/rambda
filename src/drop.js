export function drop(howManyToDrop, ) {
  return list => list.slice(howManyToDrop > 0 ? howManyToDrop : 0)
}
