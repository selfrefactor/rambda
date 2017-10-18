import curry from './internal/curry'
import equals from './equals'

function lastIndexOf (x, arr) {
  let willReturn = -1
  arr.map((value,key)=>{
    if(equals(value,x)){
      willReturn = key
    }
  })
  
  return willReturn
}

export default curry(lastIndexOf)
