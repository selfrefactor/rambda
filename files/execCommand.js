const { resolve } = require('path')
const { spawnSync } = require('child_process')
const RAMBDA_DIR = resolve(__dirname, '../')

function execCommand(command, cwd = RAMBDA_DIR){
  const [ baseCommand, ...rest ] = command.split(' ')

  const { status } = spawnSync(
    baseCommand, rest, {
      stdio : 'inherit',
      cwd,
    }
  )

  return status === 0
}

exports.execCommand = execCommand
