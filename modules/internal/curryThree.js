import curry from './curry'

export default function curryThree (fn) {
  return (x, y, z) => {
    if (y === undefined) {
      const helper = (yHolder, zHolder) => fn(x, yHolder, zHolder)

      return curry(helper)
    } else if (z === undefined) {
      return zHolder => fn(x, y, zHolder)
    }

    return fn(x, y, z)
  }
}
