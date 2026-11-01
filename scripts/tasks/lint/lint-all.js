import { scanFolder, exec } from 'helpers-fn'

void (async function lintAll() {
	const files = await scanFolder({
		folder: 'src',
		filterFn: (path) => {
			return path.endsWith('.js') || path.endsWith('.cjs')
		},
	});
	await exec({
		cwd: process.cwd(),
		command: `yarn lint:files ${files.join(' ')}`,
	});
})();
