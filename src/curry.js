//taken from the last comment of https://gist.github.com/mkuklis/5294248

export default function curry (f, a = []) {
  return (...p) => (o => o.length >= f.length ? f(...o) : curry(f, o))([ ...a, ...p ])
}
