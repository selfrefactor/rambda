export function transpose(array){
  return array.reduce((acc, el) => {
    el.forEach((nestedEl, i) =>
      Array.isArray(acc[ i ]) ? acc[ i ].push(nestedEl) : acc.push([ nestedEl ]))

    return acc
  }, [])
}
