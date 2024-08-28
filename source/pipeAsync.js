import { reduce } from './reduce.js';

export function pipeAsync(...fnList) {
	return (startArgument) =>
		reduce(async (value, fn) => fn(await value), startArgument, fnList);
}
