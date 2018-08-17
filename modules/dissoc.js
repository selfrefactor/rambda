import omit from './omit'

export default function dissoc (prop, obj) {
  switch (arguments.length) {
    case 0:
      return dissoc
    case 1:
      return (obj) => dissoc(prop, obj)
  }

  const result = {}
  for (var p in obj) {
    result[p] = obj[p]
  }
  delete result[prop]
  return result
}
