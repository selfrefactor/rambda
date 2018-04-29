import addIndex from './addIndex'
import reduce from './reduce'

export default function zip(x, y){
  if(y === undefined){

    return yHolder => zip(x, yHolder)
  }

  return addIndex(reduce)(
    (accum, value, index) =>
      y[index] ? accum.concat([[value, y[index]]]) : accum,
    [],
    x
  )
}
