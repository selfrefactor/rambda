export function debounce(
  func, ms, immediate = false
){
  let timeout

  return function(...input){
    const later = function(){
      timeout = null
      if (!immediate){
        func.apply(null, input)
      }
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, ms)
    if (callNow){
      func.apply(null, input)
    }
  }
}
