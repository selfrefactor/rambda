const forceThrow = (fn) => input => {
  if(!fn(input)){
    throw new Error(`from force throw with filter "${fn.toString()}" "${input}"`)
  }
  return input
}
const withDefault = (fn, defaultValue, input) => {
  if(!fn(input)){
    console.log(`defaultValue`, defaultValue)
    return defaultValue
  }
  console.log(`input`, input)
  return Number(input)
}
const isNumber = x => x*1 === Number(x)
const tryNumber = forceThrow(isNumber)

const normalizeSliceInput = x => {
  if(!x.includes(':')){
    return {
      begin: tryNumber(x),
      step: null,
      end: Infinity
    }
  } 
  const [begin, end, step] = x.split(':')
  console.log(`begin, end, step`, begin, end, withDefault(isNumber, 0, begin), withDefault(isNumber, Infinity, end))

  return {
    begin: withDefault(isNumber, 0, begin),
    end: withDefault(isNumber, Infinity, end),
    step: withDefault(isNumber, 1, step),
  }
}


export class List{
  #list
  constructor(...args){
    this.#list = Array.of(...args)
  }
  get(){
    return this.#list
  }
  of(...args){
    this.#list = Array.of(...args)
  }
  slice(input, maybeStop){
    if(isNumber(input) && isNumber(maybeStop)){
      return Array.prototype.slice.call(this.#list, input, maybeStop)
    }
    if(isNumber(input)){
      return Array.prototype.slice.call(this.#list, input)
    }
    const {begin, end, step} = normalizeSliceInput(input)
    console.log(`begin, end, step`, begin, end, step)
    if(step !== 1){
      return ['TODO']
    }
    return Array.prototype.slice.call(this.#list, begin, end)
  }
  push(x){
    this.#list = [...this.#list, x]
  }
}

