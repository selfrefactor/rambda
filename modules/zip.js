const R = require("../rambda");

const zip = (array1, array2) =>
  R.addIndex(R.reduce)(
    (accum, value, index) =>
      array2[index] ? accum.concat([[value, array2[index]]]) : accum,
    [],
    array1
  );

module.exports = R.curry(zip);
