const any = require("./any")

function allPass(conditions, x){
  if(x === undefined && arguments.length === 1){
    return conditions => allPass(conditions, xHolder)
  }
  return !any(condition => !condition(x))(conditions)
}

module.exports = allPass