const type = require("./type")
const merge = require("./merge")

function curry(fn, inputArguments = {}) {
  return inputArgumentsHolder => {
    if (type(fn) === "Async") {
      return new Promise((resolve, reject) => {
        fn(merge(inputArgumentsHolder, inputArguments))
          .then(resolve)
          .catch(reject)
      })
    }
    return fn(merge(inputArgumentsHolder, inputArguments))
  }
}

module.exports = curry
