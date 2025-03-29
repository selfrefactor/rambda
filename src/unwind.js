export function unwind(property) {
  return obj => {
    return obj[property].map(x => ({
      ...obj,
      [property]: x,
    }))
  }
}
