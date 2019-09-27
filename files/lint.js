const { exec } = require('helpers')
const { resolve } = require('path')

const LIMIT = 12
const skipRules = [
  'max-len',
  'sort-keys',
]

void async function lint(){
  process.env.SKIP_ESLINT_RULES = skipRules.join(',')
  
  const output = await exec({
    // It requires `npm i -g run-fn` ============================================
    command : 'run lint',
    onLog   : () => {},
    cwd     : resolve(__dirname, '../src'),
    // cwd     : __dirname,
  })

  const filtered = output.filter(
    line => line.trim() !== ''
  )
  console.log('=====END=====')
  if(filtered.length <= LIMIT){
    return console.log('No new lint errors');
  }
  filtered.map(x => console.log(x))
}()
