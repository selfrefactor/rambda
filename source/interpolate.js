const getOccurrences = input => input.match(/{{\s*.+?\s*}}/g)

const getOccurrenceProp = occurrence =>
  occurrence.replace(/{{\s*|\s*}}/g, '')

const replace = ({ inputHolder, prop, replacer }) => {
  const regexBase = `{{${ prop }}}`
  const regex = new RegExp(regexBase, 'g')

  return inputHolder.replace(regex, replacer)
}

export function interpolate(input, templateInput){
  if (arguments.length === 1){
    return _templateInput => interpolate(input, _templateInput)
  }

  const occurrences = getOccurrences(input)
  if (occurrences === null) return input
  let inputHolder = input

  for (const occurrence of occurrences){
    const prop = getOccurrenceProp(occurrence)

    inputHolder = replace({
      inputHolder,
      prop,
      replacer : templateInput[ prop ],
    })
  }

  return inputHolder
}
