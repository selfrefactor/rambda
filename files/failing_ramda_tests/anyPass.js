const eq = require('./shared/eq')
const R = require('../../../../../rambda/dist/rambda.js')

describe('anyPass', () => {
  const odd = function(n){ return n % 2 !== 0 }
  const gt20 = function(n){ return n > 20 }
  const lt5 = function(n){ return n < 5 }
  const plusEq = function(w, x, y, z){ return w + x === y + z }