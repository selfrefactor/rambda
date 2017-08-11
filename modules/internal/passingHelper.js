function passingHelper(method, x, y){
  if(x === undefined){
    return (xHolder,yHolder) => passingHelper(method, xHolder, yHolder)
  }else if(y === undefined){
    return yHolder => passingHelper(method, x, yHolder)
  }
  if(y[method]!== undefined){
    y[method](x)
    
    return y
  }
}

module.exports = passingHelper