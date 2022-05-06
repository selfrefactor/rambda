export function glue(input, glueChar){
  return input
    .split('\n')
    .filter(x => x.trim().length > 0)
    .map(x => x.trim())
    .join(glueChar === undefined ? ' ' : glueChar)
}
