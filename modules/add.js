export default function add (x, y) {
  if (y === undefined) {
    return yHolder => add(x, yHolder)
  }

  return x + y
}
