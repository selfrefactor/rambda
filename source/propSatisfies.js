export function propSatisfies(predicate, property) {
  return obj => predicate(obj[property])
}
