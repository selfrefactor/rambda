const any = require('./any')

function allPass (conditions, x) {
  if (arguments.length === 1) {
    return xHolder => allPass(conditions, xHolder)
  }

  return !any(condition => !condition(x))(conditions)
}

module.exports = allPass
