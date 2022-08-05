import { spawnSync } from 'child_process'
import { resolve } from 'path'

jest.setTimeout(3 * 60 * 1000)

const DIR = resolve(__dirname, '../../')
const RAMBDA_DIR = resolve(__dirname, '../')

test('typings can be imported', async () => {
  spawnSync(
    'rm', [ '-rf', 'rambda-scripts-clone' ], {
      stdio : 'inherit',
      cwd   : DIR,
    }
  )
  spawnSync(
    'yarn', [ 'build:main' ], {
      stdio : 'inherit',
      cwd   : RAMBDA_DIR,
    }
  )

  const { status } = spawnSync(
    'yarn', [ 'consume-typings' ], {
      stdio : 'inherit',
      cwd   : RAMBDA_DIR,
    }
  )

  expect(status).toBe(0)
})
