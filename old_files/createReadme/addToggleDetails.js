const { getFileContent } = require('./getFileContent.js')
const { replace, glue, remove } = require('rambdax')

const CONTENT_MARKER = '__CONTENT__'
const NEW_LINE = '__NEW_LINE__'

function addToggleDetails(input){
  const [ methodName ] = input.split('\n')
  const testContent = getFileContent(`${ methodName }.spec`)
  const methodContent = getFileContent(methodName)
  if (!testContent || !methodContent) return input

  const rawDetails = glue(`
  <details>${ NEW_LINE }
  <summary>
  R.${ methodName } tests
  </summary>${ NEW_LINE }
  \`\`\`javascript
  ${ CONTENT_MARKER }
  \`\`\`${ NEW_LINE }
  </details>  
  `, '\n')

  const rawMethodContent = glue(`
  <details>${ NEW_LINE }
  <summary>
  R.${ methodName } source
  </summary>${ NEW_LINE }
  \`\`\`javascript
  ${ CONTENT_MARKER }
  \`\`\`${ NEW_LINE }
  </details>  
  `, '\n')

  const stillRawDetails = replace(CONTENT_MARKER, testContent, rawDetails)
  const details = replace(new RegExp(NEW_LINE, 'gm'), '\n', stillRawDetails)
  const stillRawMethodContent = replace(CONTENT_MARKER, methodContent, rawMethodContent)
  const finalMethodContent = replace(new RegExp(NEW_LINE, 'gm'), '\n', stillRawMethodContent)

  const withJavascriptTag = replace('```\n', '```javascript\n', input)
  const withToggleDetails = replace('```\n', `\`\`\`\n\n${ details }\n`, withJavascriptTag)
  const withMethodContent = replace('</details>', `</details>\n\n${ finalMethodContent }`, withToggleDetails)

  const withoutSourceLink = remove(
    /\[Source.+/,
    withMethodContent
  )

  return withoutSourceLink
}

exports.addToggleDetails = addToggleDetails
