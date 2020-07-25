import {ifElseAsync, delay} from 'rambda'

describe('R.ifElseAsync', () => {
  it('arity of 1 - condition is async', async () => {
    const condition = async (x: number) => {
      await delay(100)
  
      return x > 4
    }
    const whenTrue = (x: number) => `foo${x}`
    const whenFalse = (x: number) => `bar${x}`
    const fn = ifElseAsync(
      condition, whenTrue, whenFalse
    )
    fn // $ExpectType (x: number) => Promise<string>
    
    const result = await fn(5)
    result // $ExpectType string
  })
  
  it('arity of 1 - condition is sync', async () => {
    const condition = (x: number) => x > 4
    const whenTrue = async (x: number) =>{
      await delay(100)
      return `foo${x}`
    } 
    const whenFalse = async (x: number) =>{
      await delay(100)
      return `bar${x}`
    } 
    const fn = ifElseAsync(
      condition, whenTrue, whenFalse
    )
    fn // $ExpectType (x: number) => Promise<string>
    
    const result = await fn(5)
    result // $ExpectType string
  })
  
  it('arity of 1 - all inputs are async', async () => {
    const condition = async (x: number) => {
      await delay(100)
  
      return x > 4
    }
    const whenTrue = async (x: number) =>{
      await delay(100)
      return `foo${x}`
    } 
    const whenFalse = async (x: number) =>{
      await delay(100)
      return `bar${x}`
    } 
    const fn = ifElseAsync(
      condition, whenTrue, whenFalse
    )
    fn // $ExpectType (x: number) => Promise<Promise<string>>
    
    const result = await fn(5)
    result // $ExpectType string
  })

  it('arity of 2 - condition is async', async () => {
    const condition = async (x: number, y: string) => {
      await delay(100)
  
      return x + y.length > 4
    }
    const whenTrue = (x: number, y: string) => `foo${x}${y}`
    const whenFalse = (x: number, y: string) => `bar${x}${y}`
    const fn = ifElseAsync(
      condition, whenTrue, whenFalse
    )
    fn // $ExpectType (x: number, y: string) => Promise<string>
    
    const result = await fn(5, 'foo')
    result // $ExpectType string
  })
  
  it('arity of 2 - condition is sync', async () => {
    const condition = (x: number, y: string) => x + y.length > 4
    const whenTrue = async (x: number, y: string) =>{
      await delay(100)
      return `foo${x}${y}`
    } 
    const whenFalse = async (x: number, y: string) =>{
      await delay(100)
      return `bar${x}${y}`
    } 
    const fn = ifElseAsync(
      condition, whenTrue, whenFalse
    )
    fn // $ExpectType (x: number, y: string) => Promise<string>
    
    const result = await fn(5, 'foo')
    result // $ExpectType string
  })
  
  it('arity of 2 - all inputs are async', async () => {
    const condition = async (x: number, y: string) => {
      await delay(100)
  
      return x + y.length > 4
    }
    const whenTrue = async (x: number, y: string) =>{
      await delay(100)
      return `foo${x}${y}`
    } 
    const whenFalse = async (x: number, y: string) =>{
      await delay(100)
      return `bar${x}${y}`
    } 
    const fn = ifElseAsync(
      condition, whenTrue, whenFalse
    )
    fn // $ExpectType (x: number, y: string) => Promise<Promise<string>>
    
    const result = await fn(5, 'foo')
    result // $ExpectType string
  })
})
