const R = require("./compose")
const round = (num) =>{
  return Math.round(num * 100) / 100
}

const range = (start, end) => {
  let willReturn = []
  for(let i = start;  i<end; i++){
    willReturn.push(i);
  }
  return willReturn
}

const drop = (dropNumber, arr) => {
  let arrClone =  arr
  return arrClone.slice(dropNumber)
}

const dropLast = (dropNumber, arr) => {
  let arrClone =  arr
  return arrClone.slice(0,-dropNumber)
}

const head = (arr)=>{
  return dropLast(arr.length-1,arr)
}

const init = (arr)=>{
  return dropLast(1,arr)
}

const tail = (arr)=>{
  return drop(1,arr)
}

const last = (arr)=>{
  return arr[arr.length-1]
}

const flatten = (arr)=>{
 const willReturn = []
 arr.map(val=>{
   if(val instanceof Array){
     val.map(value =>{
       if(value instanceof Array){
         value.map(lastValue=>{
           if(lastValue instanceof Array){
             willReturn.push(...lastValue)
           }else{
             willReturn.push(lastValue)
           }
         })
       }else{
         willReturn.push(value)
       }
     })
   }else{
     willReturn.push(val)
   }
 })
 return willReturn
}

module.exports.round = round
module.exports.drop = drop
module.exports.dropLast = dropLast
module.exports.head = head
module.exports.init = init
module.exports.tail = tail
module.exports.last = last
module.exports.flatten = flatten
module.exports.compose = R.compose
