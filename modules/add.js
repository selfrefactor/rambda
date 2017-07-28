function add(a, b){
  if (a === undefined) {
    return add;
  } else if(b === undefined){
    return add.bind(null, a)
  }
  return a + b
}

module.exports = add
