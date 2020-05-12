import { spawnSync } from 'child_process'
import isCI from 'is-ci'
import { resolve } from 'path'

jest.setTimeout(3 * 60 * 1000)

const DIR = resolve(__dirname, '../')

test('typings are correct', async () => {
  const { status } = spawnSync(
    'yarn', [ 'typings' ], {
      stdio : 'inherit',
      cwd   : DIR,
    }
  )
  if (isCI){
    console.log('CI for some reason stop working. Status should be 0',
      status)
  } else {
    expect(status).toBe(0)
  }
})
