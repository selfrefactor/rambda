import * as R from 'rambdax'
import { writeJsonSync } from 'fs-extra'

export function foo(){
  writeJsonSync(`${__dirname}/rambdaxMethods.json`, Object.keys(R))
}
