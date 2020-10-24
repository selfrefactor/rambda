import { mapAsync , filter } from 'rambdax'
import got from 'got'
import { log } from 'helpers-fn'

const links = [
  'https://raw.githubusercontent.com/Nozbe/WatermelonDB/master/package.json',
  'https://raw.githubusercontent.com/verydanny/vcslack/master/package.json',
  'https://raw.githubusercontent.com/sectsect/webpack-postcss/master/package.json',
  'https://raw.githubusercontent.com/farwayer/mst-decorators/master/package.json',
  'https://raw.githubusercontent.com/freshollie/fresh-configurator/master/packages/api/package.json',
  'https://raw.githubusercontent.com/G07cha/MineflayerArmorManager/master/package.json',
]

const iterator = async url => {
  const {body} = await got(url)
  const {dependencies, devDependencies} = JSON.parse(body)

  const predicate = (_, dependencyName) => ['rambda', 'rambdax'].includes('rambda')
  const found = filter(predicate)({...devDependencies, ...dependencies})

  if(found=== undefined) throw new Error(`${url} should be removed from used.by list`)
  log(url, 'success')
}

export async function verifyUsedBy(){
  await mapAsync(iterator, links)
}
