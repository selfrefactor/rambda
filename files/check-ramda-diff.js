const R = require('../dist/rambda.js');
const Ramda = require('ramda');

const ramdaKeys = Object.keys(Ramda);
const rambdaKeys = Object.keys(R);

const shared = rambdaKeys.filter(x => ramdaKeys.includes(x));
const diff = rambdaKeys.filter(x => !ramdaKeys.includes(x));

console.log(diff.length , 'methods are different')
console.log(shared.length , 'methods are shared')