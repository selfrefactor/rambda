const { getTestContent } = require('./getTestContent.js')
const { replace, glue } = require('rambdax')

const TEST_MARKER = '__TEST_CONTENT__'
const NEW_LINE = '__NEW_LINE__'

function addToggleDetails(input){
  const [ methodName ] = input.split('\n')
  const testContent = getTestContent(methodName)
  if (!testContent) return input

  const rawDetails = glue(`
  <details>${ NEW_LINE }
  <summary>
  R.${ methodName } tests
  </summary>${ NEW_LINE }
  \`\`\`javascript
  ${ TEST_MARKER }
  \`\`\`${ NEW_LINE }
  </details>  
  `, '\n')

  const stillRawDetails = replace(TEST_MARKER, testContent, rawDetails)
  const details = replace(new RegExp(NEW_LINE, 'gm'), '\n', stillRawDetails)

  const withJavascriptTag = replace('```\n', '```javascript\n', input)
  const withToggleDetails = replace('```\n', `\`\`\`\n\n${ details }\n`, withJavascriptTag)

  return withToggleDetails
}

exports.addToggleDetails = addToggleDetails
