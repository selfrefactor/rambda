import fs from 'fs-extra';
import { any, mapAsync } from 'rambdax';
import { init, OUTPUT_LINT_OUTPUTS } from '../constants.js';
import { lintFn } from './lint-fn.js';

const filePaths = process.argv.slice(2);
const SEP = '====================';

async function lintSingleFile(filePath) {
	const returnFn = (output) => {
		return output
			? `
|||||||||||||||||
filePath: ${filePath}
${output}
|||||||||||||||||
`.trim()
			: output;
	};
	try {
		const lintOutputs = await lintFn(filePath);

		const result = `
${lintOutputs.lintOutput.length > 1 ? `lintOutput: ${lintOutputs.lintOutput}}\n${SEP}` : ''}
${lintOutputs.biomeOutput.length > 1 ? `biomeOutput:\n${lintOutputs.biomeOutput}}\n${SEP}` : ''}
${lintOutputs.oxlintOutput.length > 1 ? `oxlintOutput:\n${lintOutputs.oxlintOutput}}\n${SEP}` : ''}
`.trim();

		return returnFn(result);
	} catch (error) {
		console.log('error', error);
		return `LintError: ${filePath}`;
	}
}

(async function lintFiles() {
	init();
	const filteredFilePaths = filePaths.filter(
		(filePath) => any(x => filePath.endsWith(x), ['.js', '.cjs'])
	);
	await fs.writeFile(OUTPUT_LINT_OUTPUTS, '');
	const result = await mapAsync(lintSingleFile, filteredFilePaths);
	console.log('result', result);
	await fs.writeFile(OUTPUT_LINT_OUTPUTS, result.filter(Boolean).join('\n'));
})();
