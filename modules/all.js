const { filter } = require("rambda")

function all (condition, arr) {
  if (arr === undefined && arguments.length === 1) {
    return arrHolder => all(condition, arrHolder)
  }

  return filter(condition, arr).length === arr.length
}

module.exports = all
