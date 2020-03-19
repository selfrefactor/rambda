import { match, remove, trim } from 'rambdax'

export function extractName(rawInfo){
  const [ maybeName ] = match(/Method:.+/)(rawInfo)
  if (!maybeName) return ''

  return trim(remove('Method:', maybeName))
}
