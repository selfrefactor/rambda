export default function findIndex (fn, arr) {
  if(arr === undefined){
    
    return arrHolder => findIndex(fn, arrHolder)
  }
  const length = arr.length
  let index = -1

  while (++index < length) {
    if (fn(arr[ index ])) {
      return index
    }
  }

  return -1
}
