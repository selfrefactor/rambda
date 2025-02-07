const { OUTPUT_LINT_OUTPUT_PROCESS, ESLINT, PRETTIER, eslintConfig, cwd } = require("./constants")
const { existsSync, writeFileSync } = require("fs")

function prepareFilePaths() {
	[
		OUTPUT_LINT_OUTPUT_PROCESS,
	].forEach((filePath) => {
		if (!existsSync(filePath)) {
			writeFileSync(filePath, '')
		}})
}

async function check() {
  if (!existsSync(`${cwd}/${ESLINT}`)) {
    console.log('eslint not found', `${cwd}/${ESLINT}`)
    return false
  }

  if (!existsSync(`${cwd}/${PRETTIER}`)) {
    console.log('prettier not found', `${cwd}/${PRETTIER}`)
    return false
  }
  if (!existsSync(eslintConfig)) {
    console.log('eslint config not found', eslintConfig)
    return false
  }
  if (!existsSync(`${cwd}/${TEST_BIN}`)) {
    console.log('TEST_BIN not found', `${cwd}/${TEST_BIN}`)
    return false
  }
  return true
}

void (async function checkConfig() {
	prepareFilePaths()
	await check()
})()