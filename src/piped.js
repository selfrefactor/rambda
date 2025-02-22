import { pipe } from './pipe.js'

export function piped(...inputs){
  const [ input, ...fnList ] = inputs

  return pipe(...fnList)(input)
}
