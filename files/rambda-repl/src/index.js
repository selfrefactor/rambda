import {
  either,
  includes,
  when,
} from 'rambdax'
import { REPL_URL } from './constants'

const getConsoleLog = includes('console.log')
const getResultVariableLog = either(
  includes('const result ='),
  includes('const result='),
)

export function attachResultVariable(input){
  const [ firstLineRaw, ...otherLines ] = input.split('\n')
  const firstLine = `const result = ${ firstLineRaw }`

  return otherLines.length === 0 ?
    firstLine :
    [ firstLine, ...otherLines ].join('\n')
}

export function rambdaREPL(input){
  const consoleLogFlag = getConsoleLog(input)
  const resultVariableFlag = getResultVariableLog(input)
  const flag = resultVariableFlag || consoleLogFlag
  const code = when<string>(!flag, attachResultVariable)(input)
  const encoded = encodeURIComponent(code.trim())

  return `${ REPL_URL }?${ encoded }`
}
