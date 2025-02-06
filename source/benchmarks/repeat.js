const _ = require('lodash');
const R = require('../../dist/rambda.js');
const Ramda = require('ramda');
const num = 10;
const str = 'foo';

const repeat = [
	{
		label: 'Rambda',
		fn: () => {
			R.repeat(str, num);
		},
	},
	{
		label: 'Ramda',
		fn: () => {
			Ramda.repeat(str, num);
		},
	},
	{
		label: 'Lodash',
		fn: () => {
			_.repeat(str, num);
		},
	},
];

module.exports = repeat;
