export function partial(fn, ...inputs){
  const len = fn.length

  return (...secondRoundInputs) => {
    if (inputs.length + secondRoundInputs.length >= len){
      return fn(...inputs, ...secondRoundInputs)
    }

    return partial(fn, ...[ ...inputs, ...secondRoundInputs ])
  }
}
