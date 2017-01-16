const fs = require("fs")
const R = require("./")

const methods = [
"add",
 "adjust",
 "any",
 "append",
 "contains",
 "drop",
 "dropLast",
 "filter",
 "flatten",
 "head",
 "init",
 "join",
 "last",
 "length",
 "map",
 "omit",
 "path",
 "prepend",
 "pick",
 "prop",
 "propEq",
 "range",
 "repeat",
 "replace",
 "sort",
 "sortBy",
 "split",
 "splitEvery",
 "subtract",
 "tail",
 "take",
 "takeLast",
 "test",
 "toLower",
 "toUpper",
 "type",
 "values",
 "uniq",
 "update",
]

const willSave = R.compose(
  R.join("\n\n"),
  R.map(val => val.trim()),
  R.map(val=>{
    return `#### ${val}

[link to Ramda's docs for ${val} method](http://ramdajs.com/docs/#${val})`
  })
)(methods)

fs.writeFileSync("methods.txt",willSave)
