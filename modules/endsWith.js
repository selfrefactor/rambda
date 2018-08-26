import equals from './equals'
import takeLast from './takeLast'

export default function endsWith (suffix, list) {
  if(arguments.length === 1){
    return listHolder => endsWith(suffix, listHolder)
  }
  
  return equals(suffix, takeLast(suffix.length, list))
}
