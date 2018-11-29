const { trim, remove } = require('rambdax')

function cleanTOC(input){
  const removed = remove([
    '- [Rambda](#rambda)',
    '* [Rambda\'s advantages](#rambdas-advantages)',
  ], input).trim()

  return removed.split('\n').map(
    trim
  )
    .join('\n')
}

exports.cleanTOC = cleanTOC
