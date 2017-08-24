const curry = require('./internal/curry')

function sortBy (fn, arr) {
  const arrClone = arr.concat()

  return arrClone.sort((a, b) => {
    const fnA = fn(a)
    const fnB = fn(b)

    return fnA < fnB ?
      -1 :
      fnA > fnB ?
        1 :
        0
  })
}

module.exports = curry(sortBy)
