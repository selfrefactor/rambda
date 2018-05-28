import map from './map';

export default function forEach (fn, arr) {
  if (arr === undefined) {
    return arrHolder => forEach(fn, arrHolder)
  }

  map(fn, arr)

  return arr
}
