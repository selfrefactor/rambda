function isFunction(value){

  return typeof value === "function"
}

function compose () {
  const funcs = arguments
  let length = funcs.length

  while (length--) {
    if (!isFunction(funcs[ length ])) {
      throw new TypeError
    }
  }

  return function () {
    let args = arguments
    let len = funcs.length

    while (len--) {
      args = [ funcs[ len ].apply(this, args) ]
    }

    return args[ 0 ]
  }
}

module.exports = compose
