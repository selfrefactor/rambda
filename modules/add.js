function add(a, b){
  if (b === undefined) {
    return c => add(a, c)
  }
 
  return a + b
}
 
module.exports = add
