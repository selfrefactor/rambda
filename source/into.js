import { isArray } from './_internals/isArray';
import { bind } from './bind.js';
import { curry } from './curry';
import { identity } from './identity';

// move inside fn using closure, i.e. call it
const symIterator =
	typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _xArrayReduce(xf, acc, list) {
	let idx = 0;
	const len = list.length;
	while (idx < len) {
		// todo: @@transducer/step' must be constant
		acc = xf['@@transducer/step'](acc, list[idx]);
		if (acc?.['@@transducer/reduced']) {
			acc = acc['@@transducer/value'];
			break;
		}
		idx += 1;
	}
	return xf['@@transducer/result'](acc);
}

function _createReduce(arrayReduce, methodReduce, iterableReduce) {
	return function _reduce(xf, acc, list) {
		if (_isArrayLike(list)) {
			return arrayReduce(xf, acc, list);
		}
		if (list == null) {
			return acc;
		}
		if (list[symIterator] != null) {
			return iterableReduce(xf, acc, list[symIterator]());
		}
		if (typeof list.next === 'function') {
			return iterableReduce(xf, acc, list);
		}
		if (typeof list.reduce === 'function') {
			return methodReduce(xf, acc, list, 'reduce');
		}

		throw new TypeError('reduce: list must be array or iterable');
	};
}

function _xIterableReduce(xf, acc, iter) {
	let step = iter.next();
	while (!step.done) {
		acc = xf['@@transducer/step'](acc, step.value);
		if (acc?.['@@transducer/reduced']) {
			acc = acc['@@transducer/value'];
			break;
		}
		step = iter.next();
	}
	return xf['@@transducer/result'](acc);
}

function _xMethodReduce(xf, acc, obj, methodName) {
	return xf['@@transducer/result'](
		obj[methodName](bind(xf['@@transducer/step'], xf), acc),
	);
}

const _xReduce = _createReduce(_xArrayReduce, _xMethodReduce, _xIterableReduce);

function _isTransformer(obj) {
	return obj != null && typeof obj['@@transducer/step'] === 'function';
}

function _isArrayLike(x) {
	if (isArray(x)) {
		return true;
	}
	if (!x) {
		return false;
	}
	if (typeof x !== 'object') {
		return false;
	}
	if (typeof x === 'string') {
		return false;
	}
	if (x.length === 0) {
		return true;
	}
	if (x.length > 0) {
		return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
	}
	return false;
}

const _stepCatArray = {
	'@@transducer/init': Array,
	'@@transducer/step': (xs, x) => {
		xs.push(x);
		return xs;
	},
	'@@transducer/result': identity,
};
const _stepCatString = {
	'@@transducer/init': String,
	'@@transducer/step': (a, b) => a + b,
	'@@transducer/result': identity,
};
const _stepCatObject = {
	'@@transducer/init': Object,
	'@@transducer/step': (result, input) =>
		Object.assign(
			result,
			_isArrayLike(input) ? { [input[0]]: input[1] } : input,
		),
	'@@transducer/result': identity,
};

function _stepCat(obj) {
	if (_isTransformer(obj)) {
		return obj;
	}
	if (_isArrayLike(obj)) {
		return _stepCatArray;
	}
	if (typeof obj === 'string') {
		return _stepCatString;
	}
	if (typeof obj === 'object') {
		return _stepCatObject;
	}
	throw new Error(`Cannot create transformer for ${obj}`);
}

export function intoFn(acc, transducer, list) {
	const xf = transducer(_isTransformer(acc) ? acc : _stepCat(acc));
	return _xReduce(xf, xf['@@transducer/init'](), list);
}

export const into = curry(intoFn);
