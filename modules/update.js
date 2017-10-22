export default function update (index, newValue, arr) {
  if (newValue === undefined) {
    return (newValueHolder, arrHolder) => update(index, newValueHolder, arrHolder)
  } else if (arr === undefined) {
    return arrHolder => update(index, newValue, arrHolder)
  }
  const arrClone = arr.concat()

  return arrClone.fill(newValue, index, index + 1)
}
