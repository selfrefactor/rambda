function simpleHelper(method, x){
  if(x === undefined){
    return (xHolder) => simpleHelper(method, xHolder)
  }
  if(x[method]!== undefined){
    return x[method]()
  }
}

module.exports = simpleHelper