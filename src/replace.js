export default function replace (regex, replacer, str) {
  if (replacer === undefined) {
    return (replacerHolder, strHolder) => replace(regex, replacerHolder, strHolder)
  } else if (str === undefined) {
    return strHolder => replace(regex, replacer, strHolder)
  }

  return str.replace(regex, replacer)
}
