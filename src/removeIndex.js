export function removeIndex(index) {
	return list => {
  if (index <= 0) {
    return list.slice(1)
  }
  if (index >= list.length - 1) {
    return list.slice(0, list.length - 1)
  }

  return [...list.slice(0, index), ...list.slice(index + 1)]
}
}
