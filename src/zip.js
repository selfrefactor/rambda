/**
 * Taken from 
 * https://github.com/Nozbe/WatermelonDB/blob/master/src/utils/fp/zip/index.js
 */

export function zip(left, right) {
  if (right === undefined) {
    return function(right) {
      return zip(left, right)
    }
  }

  var result = []
  var length = Math.min(left.length, right.length)

  for (var i = 0; i < length; i++) {
    result[i] = [left[i], right[i]]
  }

  return result
}
