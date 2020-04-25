import { multiply } from './multiply'
import { reduce } from './reduce'

export const product = reduce(multiply, 1)
