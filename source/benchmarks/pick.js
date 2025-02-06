const _ = require('lodash');
const R = require('../../dist/rambda.js');
const Ramda = require('ramda');

const obj = {
	a: 'foo',
	b: 'bar',
	c: 'baz',
};
const pickInput = ['a', 'c'];
const pick = [
	{
		label: 'Rambda',
		fn: () => {
			R.pick(pickInput, obj);
		},
	},
	{
		label: 'Ramda',
		fn: () => {
			Ramda.pick(pickInput, obj);
		},
	},
	{
		label: 'Lodash',
		fn: () => {
			_.pick(obj, pickInput);
		},
	},
];

module.exports = pick;
