import { path } from './path.js'

function singleSort(
  a, b, sortPaths
){
  let toReturn = 0
  sortPaths.forEach(singlePath => {
    if (toReturn !== 0) return
    const aResult = path(singlePath, a)
    const bResult = path(singlePath, b)
    if ([ aResult, bResult ].includes(undefined)) return
    if (aResult === bResult) return

    toReturn = aResult > bResult ? 1 : -1
  })

  return toReturn
}

export function sortByProps(sortPaths, list){
  if (arguments.length === 1) return _list => sortByProps(sortPaths, _list)
  const clone = list.slice()

  clone.sort((a, b) => singleSort(
    a, b, sortPaths
  ))

  return clone
}
