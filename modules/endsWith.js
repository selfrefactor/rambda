import equals from './equals'
import takeLast from './takeLast'

export default function endsWith (suffix, list) {
  switch (arguments.length) {
    case 0:
      return endsWith
    case 1:
      return (list) => endsWith(suffix, list)
    default:
      return equals(suffix, takeLast(suffix.length, list))
  }
}
