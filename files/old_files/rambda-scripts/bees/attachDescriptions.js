const { forEach, remove, replace } = require('rambdax')
const { readFileSync } = require('fs')
const { resolve } = require('path')

function attachDescriptions(input){
  const content = readFileSync(resolve(__dirname, '../../rambda/files/index.d.ts')).toString()
  let toReturn = content

  forEach(x => {
    console.log({ x })
    if (!x.explanation) return
    if (!x.typing) return

    const a = replace(
      x.typing, `/*\n\t\t\t${ x.explanation }\t\n\t\t*/\t${ x.typing }`, toReturn
    )
    toReturn = a
  })(input)
  const final = remove(/\/\/\sSINGLE_MARKER/g, toReturn)

  // writeFileSync(resolve(__dirname, '../../rambda/index.d.ts'), final)
  return final
}

exports.attachDescriptions = attachDescriptions
