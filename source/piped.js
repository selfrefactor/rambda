import { pipe } from './pipe'

export function piped(...inputs){
  const [ input, ...fnList ] = inputs

  return pipe(...fnList)(input)
}
