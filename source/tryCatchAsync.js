export function tryCatchAsync(fn, fallback) {
  return (input) =>
    new Promise(resolve => {
      fn(input)
        .then(resolve)
        .catch(err => {
          return resolve(fallback)
        })
    })
}
