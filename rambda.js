const R = require("./ramda")

const add = (a,b)=>{
	if(b === undefined){
  	return c => add(a,c)
  }else{
  	return a + b
  }
}

const adjust = (fn,index,arr)=>{
  if(index === undefined){
    return (indexHolder, arrHolder) => adjust(fn,indexHolder, arrHolder)
  }else if(arr === undefined){
    return holder => adjust(fn,index, holder)
  }else{
    return arr.map((val,key)=>{
      if(key===index){
        return fn(arr[index])
      }else{
        return val
      }
    })
  }
}

const any = (fn,arr) =>{
	if(arr===undefined){
  	return holder => any(fn,holder)
  }else{
  	let flag = false
  arr.map(val=>{
  	if(fn(val)===true){
    	flag = true
    }
  })
  return flag
  }
}

const append = (val,arr)=>{
	if(arr === undefined){
  	return holder => append(val,holder)
  }else{
  	const clone = arr
  	clone.unshift(val)
    return clone
  }
}

const contains = (val,arr) =>{
  if(arr===undefined){
    return holder => contains(val,holder)
  }else{
    return any(value=>val===value,arr)
  }
}

const filter = (fn,arr) =>{
	if(arr===undefined){
  	return holder => filter(fn,holder)
  }else{
  	return arr.filter(fn)
  }
}

const flatten = arr => {
  const willReturn = []
  arr.map(val => {
    if (val instanceof Array) {
      val.map(value => {
        if (value instanceof Array) {
          value.map(lastValue => {
            if (lastValue instanceof Array) {
              willReturn.push(...lastValue)
            } else {
              willReturn.push(lastValue)
            }
          })
        } else {
          willReturn.push(value)
        }
      })
    } else {
      willReturn.push(val)
    }
  })

  return willReturn
}

const drop = (dropNumber, arr) => {
  if(arr === undefined){
    return holder => drop(dropNumber, holder)
  }else{
    const arrClone = arr

    return arrClone.slice(dropNumber)
  }
}

const dropLast = (dropNumber, arr) => {
  if(arr === undefined){

    return holder => dropLast(dropNumber, holder)
  }else{
    const arrClone = arr

    return arrClone.slice(0, -dropNumber)
  }
}

const head = arr => dropLast(arr.length - 1, arr)

const init = arr => dropLast(1, arr)

const join = (glue,arr) =>{
	if(arr===undefined){
  	return holder => join(glue,holder)
  }else{
  	return arr.join(glue)
  }
}

const map = (fn,arr) =>{
	if(arr===undefined){
  	return holder => map(fn,holder)
  }else{
  	return arr.map(fn)
  }
}

const last = arr => arr[ arr.length - 1 ]

const prepend = (val,arr)=>{
	if(arr === undefined){
  	return holder => prepend(val,holder)
  }else{
  	const clone = arr
    clone.push(val)
  	return clone
  }
}

const range = (start, end) => {
  const willReturn = []
  for (let i = start; i < end; i++) {
    willReturn.push(i)
  }

  return willReturn
}

const subtract = (a,b)=>{
	if(b === undefined){
  	return c => subtract(a,c)
  }else{
  	return a - b
  }
}

const split = (glue,str) =>{
	if(str===undefined){
  	return holder => split(glue,holder)
  }else{
  	return str.split(glue)
  }
}

const tail = arr => drop(1, arr)

module.exports.add = add
module.exports.adjust = adjust
module.exports.any = any
module.exports.append = append
module.exports.compose = R.compose
module.exports.contains = contains
module.exports.drop = drop
module.exports.dropLast = dropLast
module.exports.filter = filter
module.exports.flatten = flatten
module.exports.flip = R.flip
module.exports.head = head
module.exports.init = init
module.exports.join = join
module.exports.last = last
module.exports.map = map
module.exports.prepend = prepend
module.exports.range = range
module.exports.split = split
module.exports.subtract = subtract
module.exports.tail = tail
