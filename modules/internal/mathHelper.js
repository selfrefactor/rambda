const curryThree = require("./curryThree")


function mathHelper (operation, x, y){
  switch (operation) {
    case '+':
      return x+y
    case '-':
      return x-y
    case '/':
      return x/y
    case '*':
      return x*y
    case '%':
      return x%y
  }
}

module.exports = curryThree(mathHelper)
