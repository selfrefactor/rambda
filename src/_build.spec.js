import { spawnSync } from 'child_process'
import { resolve } from 'path'
jest.setTimeout(30000)

const DIR = resolve(__dirname, '../')

test('can build', async () => {
  const { status } = spawnSync('yarn', [ 'build' ], {
    stdio : 'inherit',
    cwd   : DIR,
  })
  expect(status).toBe(0)
})
