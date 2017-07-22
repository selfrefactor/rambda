function add(a, b){
  if (b === undefined) {
    return add.bind(null, a)
  }

  return a + b
}

module.exports = add
