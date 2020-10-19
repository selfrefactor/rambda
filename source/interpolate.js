const getOccurances = input => input.match(/{{\s*.+?\s*}}/g)

const getOccuranceProp = occurance => occurance.replace(/{{\s*|\s*}}/g, '')

const replace = ({ inputHolder, prop, replacer }) => {
  const regexBase = `{{${ prop }}}`
  const regex = new RegExp(regexBase, 'g')

  return inputHolder.replace(regex, replacer)
}

export function interpolate(input, templateInput){
  if (arguments.length === 1){
    return _templateInput => interpolate(input, _templateInput)
  }

  const occurances = getOccurances(input)
  if (occurances === null) return input
  let inputHolder = input

  for (const occurance of occurances){
    const prop = getOccuranceProp(occurance)

    inputHolder = replace({
      inputHolder,
      prop,
      replacer : templateInput[ prop ],
    })
  }

  return inputHolder
}
