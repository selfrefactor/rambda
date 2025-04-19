===
ABOVE IS DONE
===
function assertType<T, U extends T>(fn: (x: T) => x is U) {
  return (x: T) => {
    if (fn(x)) {
      return x
    }
    throw new Error('type assertion failed')
  }
}
function convertToType<T>() {
  return <U>(x: U) => x as unknown as T
}
const convertToType = <T>(x: unknown)=> x as unknown as T

document scripts

npx jsr publish

ABOVE IS IN PROGRESS
===
use functor as a word
https://github.com/hemanth/functional-programming-jargon?utm_source=hackernewsletter&utm_medium=email&utm_term=code#functor

