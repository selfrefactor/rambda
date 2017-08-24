//Taken from https://github.com/getify/Functional-Light-JS/blob/master/ch4.md
const compose = (...fns) =>
  result => {
    const list = fns.slice()

    while (list.length > 0) {
      result = list.pop()(result)
    }

    return result
  }

module.exports = compose
