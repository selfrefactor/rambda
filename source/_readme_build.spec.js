import { spawnSync } from 'child_process'
import { resolve } from 'path'
jest.setTimeout(1 * 60 * 1000)

const DIR = resolve(__dirname, '../')

test('can build readme', async () => {
  const { status } = spawnSync(
    'yarn', [ 'out' ], {
      stdio : 'inherit',
      cwd   : DIR,
    }
  )
  expect(status).toBe(0)
}) 
