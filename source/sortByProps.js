import {path} from './path'

function singleSort(a,b, paths){
  let toReturn = 0
  paths.forEach(singlePath => {
    if(toReturn!== 0) return
    const aResult = path(singlePath, a)  
    const bResult = path(singlePath, b)
    if([aResult, bResult].includes(undefined)) return
    if(aResult === bResult) return

    toReturn = aResult > bResult ? 1 : -1
  });

  return toReturn
}

export function sortByProps(paths, list){
  const clone = list.slice()

  clone.sort((a,b) => singleSort(a,b, paths))

  return clone
}