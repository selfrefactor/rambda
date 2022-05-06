export function debounce(
  func, ms, immediate = false
){
  let timeout

  return function (...input){
    const later = function (){
      timeout = null
      if (!immediate){
        return func.apply(null, input)
      }
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, ms)
    if (callNow){
      return func.apply(null, input)
    }
  }
}
