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
 "equals",
 "filter",
 "find",
 "findIndex",
 "flatten",
 "head",
 "indexOf",
 "init",
 "join",
 "last",
 "length",
 "map",
 "match",
 "merge",
 "omit",
 "path",
 "pick",
 "prepend",
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
 "trim",
 "type",
 "uniq",
 "update",
 "values",
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
