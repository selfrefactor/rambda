const escapeSpecialCharacters = s =>
  s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')

const getOccurances = input => input.match(/{{\s*.+?\s*}}/g)

const getOccuranceProp = occurance => occurance.replace(/{{\s*|\s*}}/g, '')

const replace = ({ inputHolder, prop, replacer }) =>
  inputHolder.replace(new RegExp(`{{\\s*${ escapeSpecialCharacters(prop) }\\s*}}`),
    replacer)

export function interpolate(input, templateInput){
  if (arguments.length === 1){
    return _templateInput => interpolate(input, _templateInput)
  }

  const occurances = getOccurances(input)
  if (occurances === null) return input
  let inputHolder = input
  for (const occurance of occurances){
    const prop = getOccuranceProp(occurance)

    try {
      const replacer = new Function('templateInput',
        `with(templateInput) { return ${ prop } }`)(templateInput)

      inputHolder = replace({
        inputHolder,
        prop,
        replacer,
      })
    } catch (e){}
  }

  return inputHolder
}
