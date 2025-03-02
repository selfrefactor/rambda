
export function props(propsToPick) {
	return obj => propsToPick.map(prop => obj[prop])
}
