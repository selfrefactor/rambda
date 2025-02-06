import { curry } from './curry.js';
import { path } from './path.js';

export function pathSatisfiesFn(fn, pathInput, obj) {
	if (pathInput.length === 0)
		throw new Error('R.pathSatisfies received an empty path');
	return Boolean(fn(path(pathInput, obj)));
}

export const pathSatisfies = curry(pathSatisfiesFn);
