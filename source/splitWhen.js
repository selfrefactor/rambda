export function splitWhen(predicate) {
  return input => {
    const preFound = []
    const postFound = []
    let found = false
    let counter = -1

    while (counter++ < input.length - 1) {
      if (found) {
        postFound.push(input[counter])
      } else if (predicate(input[counter])) {
        postFound.push(input[counter])
        found = true
      } else {
        preFound.push(input[counter])
      }
    }

    return [preFound, postFound]
  }
}
