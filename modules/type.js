function extractFunctionConstructor(str) {
  return str
    .match(/function ([^()])*/)[0]
    .replace("function ","")
}

function extractClassConstructor(str) {
  return str
    .match(/class\s[^\s]*/)[0]
    .replace(/class\s/,"");
}

function type(a){
  const ofType = typeof a

  switch (ofType) {
    case "null":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return ofType[0].toUpperCase() + ofType.substr(1, ofType.length)
  }
  
  if(a === null) {
    return "Null"
  } else if(a.toString().startsWith("async")) {
    return "Async"
  }
  
  const constString = a.constructor.toString();

  if (constString.includes("function")) {
    return extractFunctionConstructor(constString)
  } else if (constString.includes("class")){
    return extractClassConstructor(constString)
  }
  return "Unknown"
}

module.exports = type
