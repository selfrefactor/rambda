import { extractRawInfo } from './extract-raw-info.js'

test('happy', () => {
  const [ result ] = extractRawInfo()
  expect(result).toMatchInlineSnapshot(`
    "/*
    Method: add

    Explanation:

    It adds \`a\` and \`b\`. It doesn't work with strings, as the inputs are parsed to numbers before calculation.

    Example:

    \`\`\`
    R.add(2, 3) // =>  5
    \`\`\`
    */
    // "
  `)
})
