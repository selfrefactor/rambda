import curryThree from './curryThree'

function mathHelper (operation, x, y) {
  switch (operation) {

  case '+':
    return x + y
  case '-':
    return x - y
  case '/':
    return x / y
  case '*':
    return x * y
  case '%':
    return x % y

  }
}

export default curryThree(mathHelper)
