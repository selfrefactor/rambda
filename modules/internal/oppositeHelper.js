function oppositeHelper (method, x, y) {
  if (x === undefined) {
    return (xHolder, yHolder) => oppositeHelper(method, xHolder, yHolder)
  } else if (y === undefined) {
    return yHolder => oppositeHelper(method, x, yHolder)
  }
  if (x[ method ] !== undefined) {
    return x[ method ](y)
  }
}

module.exports = oppositeHelper
