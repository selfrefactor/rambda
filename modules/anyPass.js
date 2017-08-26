const any = require('./any')

function anyPass (conditions, x) {
  if (arguments.length === 1) {
    return xHolder => anyPass(conditions, xHolder)
  }

  return any(condition => condition(x))(conditions)
}

module.exports = anyPass
