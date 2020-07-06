import { spawnSync } from 'child_process'
import isCI from 'is-ci'
import { resolve } from 'path'

jest.setTimeout(3 * 60 * 1000)

const DIR = resolve(__dirname, '../')

test('typings are correct', async () => {
  if (isCI) return

  const { status } = spawnSync(
    'yarn', [ 'typings' ], {
      stdio : 'inherit',
      cwd   : DIR,
    } 
  )

  expect(status).toBe(0)
})
