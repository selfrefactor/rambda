export function add(a) {
	return function (b) {
		return Number(a) + Number(b);
	};
}