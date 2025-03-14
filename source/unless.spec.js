import { unless } from './unless.js'

test('happy', () => {
	expect(unless(x => x > 10, x => x + 1)(20)).toEqual(20)
	expect(unless(x => x > 10, x => x + 1)(5)).toEqual(6)
})

