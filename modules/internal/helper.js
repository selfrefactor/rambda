export default function helper (method, x, y) {
  if (x === undefined) {
    return (xHolder, yHolder) => helper(method, xHolder, yHolder)
  } else if (y === undefined) {
    return yHolder => helper(method, x, yHolder)
  }
  if (y[ method ] !== undefined) {
    return y[ method ](x)
  }
}
