export function reverse(input){
  if (typeof input === 'string'){
    return input.split('').reverse()
      .join('')
  }

  const clone = input.slice()

  return clone.reverse()
}
