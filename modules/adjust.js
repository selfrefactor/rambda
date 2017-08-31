import curryThree from './internal/curryThree'

function adjust (fn, index, arr) {
  const clone = arr.concat()

  return clone.map((val, key) => {
    if (key === index) {
      return fn(arr[ index ])
    }

    return val
  })
}

export default curryThree(adjust)
