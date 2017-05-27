function values(obj){
  const willReturn = []
  for (key in obj) {
    willReturn.push(obj[ key ])
  }

  return willReturn
}

module.exports = values
