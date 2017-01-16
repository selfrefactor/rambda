const R = require('ramda');
var xs = [{a: 1}, {a: 2}, {a: 3}];
let a = R.findIndex((x,y,z)=>{
  console.log(x,y,z)
  return true
})(xs)

console.log(a)
