export function checkObjectWithSpec(conditions) {
	return function(input) {
	let shouldProceed = true
  for (const prop in conditions) {
    if (!shouldProceed) {
      continue
    }
    const result = conditions[prop](input[prop])
    if (shouldProceed && result === false) {
      shouldProceed = false
    }
  }

  return shouldProceed
}
}
