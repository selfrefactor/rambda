export function throttle(fn, ms){
  let wait = false
  let result

  return function (...input){
    if (!wait){
      result = fn.apply(null, input)
      wait = true
      setTimeout(() => {
        wait = false
      }, ms)
    }

    return result
  }
}
