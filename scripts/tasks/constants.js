import { execSafe, exec as execFn } from 'helpers-fn';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cwd = resolve(__dirname, '../../');
export const BIOME = 'node_modules/@biomejs/biome/bin/biome'
export const OXLINT = 'node_modules/@oxlint/linux-x64-musl/oxlint'
export const PRETTIER = 'node_modules/prettier/bin/prettier.cjs'
export const ESLINT = 'node_modules/eslint/bin/eslint.js'
export const TEST_BIN = 'node_modules/vitest/dist/cli'
export const STYLELINT = 'node_modules/stylelint/bin/stylelint.mjs'
export const eslintConfig = `${cwd}/eslint.config.mjs`

export async function exec(command) {
	try {
		await execSafe({ command, cwd })
		return { success: true, errorMessage: '' }
	} catch (error) {
		return {
			errorMessage: error?.message ? String(error?.message) : JSON.stringify(error, null, 2),
			success: false,
		}
	}
}

export async function execWithStandartOutput(command) {
	try {
		let logs = await execFn({ command, cwd })
		return { success: true, logs: logs.join() }
	} catch (error) {
		return {
			errorMessage: error?.message ? String(error?.message) : JSON.stringify(error, null, 2),
			success: false,
		}
	}
}


export const OUTPUT_DEBUG_FILE = `${__dirname}/outputs/debug.txt`
export const OUTPUT_TEST_FILE = `${__dirname}/outputs/test.txt`
export const OUTPUT_LINT_OUTPUT_PROCESS = `${__dirname}/outputs/eslint-output-process.txt`
export const OUTPUT_LINT_OUTPUTS = `${__dirname}/outputs/eslint-outputs.txt`

export const init = async () => {
	[
		OUTPUT_DEBUG_FILE,
		OUTPUT_TEST_FILE,
		OUTPUT_LINT_OUTPUT_PROCESS,
		OUTPUT_LINT_OUTPUTS,
	].forEach(async (file) => {
		if(existsSync(file)) return
		await exec(`mkdir -p ${dirname(file)}`)
		await exec(`touch ${file}`)
	})
}