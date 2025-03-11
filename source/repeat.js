export function repeat(timesToRepeat) {
  return x => Array(timesToRepeat).fill(x)
}