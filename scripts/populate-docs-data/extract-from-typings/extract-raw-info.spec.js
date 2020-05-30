import { extractRawInfo } from './extract-raw-info'

test('happy', () => {
  const [ result ] = extractRawInfo()
  expect(result).toMatchInlineSnapshot(`
    "/*
    Method: add

    Explanation:

    It adds \`a\` and \`b\`.

    Example:

    \`\`\`
    R.add(2, 3) // =>  5
    \`\`\`

    Categories: Number

    Notes: It doesn't work with strings, as the inputs are parsed to numbers before calculation.

    */
    // "
  `)
})
