function propHelper (method, x) {
  if (x === undefined) {
    return xHolder => propHelper(method, xHolder)
  }

  return x[ method ]
}

module.exports = propHelper
