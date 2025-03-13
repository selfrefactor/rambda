import { type } from './type.js'

export async function pipeAsync(input, ...fnList) {
		let willReturn = input
		for (const fn of fnList) {
			const initialResult = type(fn) === 'Promise' ? await fn(willReturn) : fn(willReturn)
			
			willReturn = type(initialResult) === 'Promise' ? await initialResult : initialResult
    }
		return willReturn
}
