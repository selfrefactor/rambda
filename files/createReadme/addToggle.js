const { count } = require('string-fn')
const { replace } = require('rambdax')

function addToggle(input){
  const [ methodName ] = input.split('\n')
  const counted = count(input, '```\n')
  const details = 'fds'
  const withJavascriptTag = replace('```\n', '```javascript\n', input)
  const withToggleDetails = replace('```\n', `\`\`\`\n${ details }`, withJavascriptTag)

  // return withJavascriptTag
  return withToggleDetails
}

exports.addToggle = addToggle
