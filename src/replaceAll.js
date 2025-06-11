export function replaceAll(patterns, replacer) {
  return input => {
    let text = input
    patterns.forEach(singlePattern => {
      text = text.replace(singlePattern, replacer)
    })

    return text
  }
}
