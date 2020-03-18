export function throttle(fn, ms){
  let wait = false

  return function(...input){
    if (!wait){
      fn.apply(null, input)
      wait = true
      setTimeout(() => {
        wait = false
      }, ms)
    }
  }
}
