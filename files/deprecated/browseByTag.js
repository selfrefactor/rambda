const fs = require('fs-extra')
const path = require('path')
const R = require('../dist/rambda.js')
const ramdaData = require('./ramdaData.json').data

const fn = async () => {
  try {
    const filePath = path.resolve(__dirname, '../rambda.js')
    const data = fs.readFileSync(filePath).toString()
    const ourData = R.compose(
      R.map(R.init),
      R.map(R.replace('from \'./src/', '')),
      R.flatten,
      R.map(x =>
        R.match(/from.{1,25}/g, x)),
      R.filter(R.includes('* from')),
      R.split('\n')
    )(data)

    return R.compose(
      R.join('\n'),
      R.map(x => {
        let localWillReturn = `
### ${ x.category }

          `

        x.data.map(singleFunction => {
          localWillReturn += `
[${ singleFunction }](#${ singleFunction.toLowerCase() })

            `
        })

        return localWillReturn
      }),
      R.filter(x => x.data.length > 2),
      R.map(category => {
        const filteredData = R.filter(x => ourData.includes(x))(ramdaData[ category ])

        return {
          category,
          data : filteredData,
        }
      }),
      Object.keys
    )(ramdaData)
  } catch (err){
    throw new Error(err)
  }
}

fn().then(result => {
  fs.writeFileSync(`${ __dirname }/browseByTag.md`, result)
})
