export default function flatten (arr, willReturn) {
  willReturn = willReturn === undefined ?
    [] :
    willReturn

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[ i ])) {
      flatten(arr[ i ], willReturn)
    } else {
      willReturn.push(arr[ i ])
    }
  }

  return willReturn
}
