export function throttle(fn, ms) {
	let wait = false;
	let result;

	return (...input) => {
		if (!wait) {
			result = fn.apply(null, input);
			wait = true;
			setTimeout(() => {
				wait = false;
			}, ms);
		}

		return result;
	};
}
