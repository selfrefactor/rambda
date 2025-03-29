export function tryCatch(fn, fallback) {
  return input => {
    try {
      return fn(input)
    } catch (e) {
      return fallback
    }
  }
}
