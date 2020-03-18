export function delay(ms){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('RAMBDAX_DELAY')
    }, ms)
  })
}
