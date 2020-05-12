export function promiseAllObject(promises){
  return new Promise((res, rej) => {
    let counter = 0
    const props = {}
    const promisedArr = []

    for (const prop in promises){
      props[ counter ] = prop
      promisedArr.push(promises[ prop ])
      counter++
    }

    Promise.all(promisedArr)
      .then(result => {
        const willReturn = {}
        result.map((val, key) => {
          const prop = props[ key ]
          willReturn[ prop ] = val
        })

        res(willReturn)
      })
      .catch(rej)
  })
}
