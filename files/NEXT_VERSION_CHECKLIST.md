sortingfn

map list of Objects which Create property from fn

let list = [
	{a: 1, b: 2},
	{a: 3, b: 4},
]

const result = mapObjectWithDecorate({
	property: 'c',
	fn: (x) => x.a + x.b,
	list,
})
// result => [
// 	{a: 1, b: 2, c: 3},
// 	{a: 3, b: 4, c: 7},
// ]

===
https://jsr.io/@rambda/rambda
===
ABOVE IS DONE
===
npm version premajor --preid alpha
npm version prerelease --preid beta

    npm version premajor changes 23.1.6 to 24.0.0-0

From that point on, you can increase the prerelease version number using the command npm version prerelease.

    npm version prerelease 
		changes 24.0.0-alpha.0 to 24.0.0-alpha.1

ABOVE IS IN PROGRESS
===
use functor as a word
https://github.com/hemanth/functional-programming-jargon?utm_source=hackernewsletter&utm_medium=email&utm_term=code#functor

