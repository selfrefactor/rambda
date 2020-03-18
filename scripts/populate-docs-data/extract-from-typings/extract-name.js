import { match, remove, trim } from 'rambdax'
export function extractName(rawInfo){
  const [ result ] = match(/Method:.+/)(rawInfo)

  return trim(remove('Method:', result))
}
