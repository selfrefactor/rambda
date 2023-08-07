import {prepend} from 'rambda'

const listOfNumbers = [1, 2, 3]
const listOfNumbersAndStrings = [1, "b", 3]

describe('R.prepend', () => {
  describe('with the same primitive type as the array\'s elements', () => {
    it('uncurried', () => {
      // @ts-expect-error
      prepend("d", listOfNumbers)
      const result = prepend(4, listOfNumbers)
      result // $ExpectType number[]
    })

    it('curried', () => {
      // @ts-expect-error
      prepend("d")(listOfNumbers)
      const result = prepend(4)(listOfNumbers)
      result // $ExpectType number[]
    })
  });

  describe('with a subtype of the array\'s elements', () => {
    it('uncurried', () => {
      // @ts-expect-error
      prepend(true, listOfNumbersAndStrings)
      const result = prepend(4, listOfNumbersAndStrings)
      result // $ExpectType (string | number)[]
    })

    it('curried', () => {
      // @ts-expect-error
      prepend(true)(listOfNumbersAndStrings)
      const result = prepend(4)(listOfNumbersAndStrings)
      result // $ExpectType (string | number)[]
    })
  });

  describe('expanding the type of the array\'s elements', () => {
    it('uncurried', () => {
      // @ts-expect-error
      prepend("d", listOfNumbers)
      const result = prepend<string | number>("d", listOfNumbers)
      result // $ExpectType (string | number)[]
    })

    it('curried', () => {
      // @ts-expect-error
      prepend("d")(listOfNumbers)
      const prependD = prepend("d");
      const result = prependD<string | number>(listOfNumbers)
      result // $ExpectType (string | number)[]
    })
  });
})
