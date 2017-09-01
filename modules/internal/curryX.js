import __ from '../__'

export default function curry (fn) {
  return (x, y) => {
    if (y === undefined) {
      return yHolder => fn(x, yHolder)
    }
    if (x === __) {
      return xHolder => fn(xHolder, y)
    }

    return fn(x, y)
  }
}
