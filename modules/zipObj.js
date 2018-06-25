export default function zipObj(x, y){
  if(y === undefined){

    return yHolder => zipObj(x, yHolder)
  }

  return x.reduce(
    (prev, xInstance, i) => {
      prev[xInstance] = y[i]
      return prev
    },
    {}
  )
}
