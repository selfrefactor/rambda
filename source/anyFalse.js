import { isFalsy } from './_internals/isFalsy.js';
import { type } from './type.js';

export function anyFalse(...inputs) {
	let counter = 0;
	while (counter < inputs.length) {
		const x = inputs[counter];

		if (type(x) === 'Function') {
			if (isFalsy(x())) {
				return true;
			}
		} else if (isFalsy(x)) {
			return true;
		}

		counter++;
	}

	return false;
}
