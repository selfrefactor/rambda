export function juxt(listOfFunctions) {
  return (...args) => {
    return listOfFunctions.map(fn => fn(...args))
  }
}
