export const RAMBDA_DELAY = 'RAMBDA_DELAY'

export function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(RAMBDA_DELAY)
    }, ms)
  })
}
