const cheerio = require('cheerio')
const fs = require('fs-extra')
const path = require('path')
const R = require('../dist/rambda.js')
const request = require('request-promise')

const ourModules = [ 'test' ] // special case

const getOur = () => {
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

  return ourData
}

const getRamda = async our => {
  const $ = await request({
    uri       : 'https://ramdajs.com/docs/',
    transform : body => cheerio.load(body),
  })
  const ar = $('li.func')
    .toArray()
    .map(el => [
      R.path('attribs.data-category', el),
      R.path('attribs.data-name', el),
    ])

  return R.pipe(
    R.filter(
      R.pipe(
        R.nth(1),
        R.pipe(
          i => R.includes(i, our) || R.includes(i, ourModules),
          R.not
        )
      )
    ),
    R.reduce((acc, val) =>
      R.merge(acc,
        { [ val[ 0 ] ] : R.append(val[ 1 ], acc[ val[ 0 ] ] || []) }),
    {},
    )
  )(ar)
}

const fn = async () => {
  try {
    const ourData = getOur()
    const ramdaData = await getRamda(ourData)

    return R.pipe(
      Object.entries,
      R.reduce((acc, el) => `${ acc }

### ${ el[ 0 ] }
 ${ R.reduce((accF, f) => `${ accF }
 [${ f }](https://raw.githubusercontent.com/ramda/ramda/master/source/${ f }.js)
 `,
  '',
  el[ 1 ]) }
          `, '## Ramda methods missing in Rambda')
    )(ramdaData)
  } catch (err){
    throw new Error(err)
  }
}

fn().then(result => {
  fs.writeFileSync(`${ __dirname }/ramdaMissing.md`, result)
})
