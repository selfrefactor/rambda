const input = [ 'zipObj\n',
  '\n',
  '> zipObj(a: K[], b: V[]): Object\n',
  '\n',
  'It will return a new object with keys of `a` array and values of `b` array.\n',
  '\n',
  '```\n',
  'R.zipObj([\'a\', \'b\', \'c\'], [1, 2, 3])\n',
  '//=> {a: 1, b: 2, c: 3}\n',
  '\n',
  '// truncates to shortest list\n',
  'R.zipObj([\'a\', \'b\', \'c\'], [1, 2])\n',
  '//=> {a: 1, b: 2}\n',
  '```\n',
  '\n',
  '[Source](https://github.com/selfrefactor/rambda/tree/master/src/zipObj.js)\n',
  '\n',
]

const { addToggleDetails } = require('./addToggleDetails.js')

test('happy', () => {
  console.log(
    addToggleDetails(input.join``)

  )
  // expect().toBe()
})
