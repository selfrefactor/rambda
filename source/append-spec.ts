import {append} from 'rambda'

const listOfNumbers = [1, 2, 3]
const listOfNumbersAndStrings = [1, "b", 3]

describe('R.append', () => {
  describe('with the same primitive type as the array\'s elements', () => {
    it('uncurried', () => {
      // @ts-expect-error
      append("d", listOfNumbers)
      const result = append(4, listOfNumbers)
      result // $ExpectType number[]
    })

    it('curried', () => {
      // @ts-expect-error
      append("d")(listOfNumbers)
      const result = append(4)(listOfNumbers)
      result // $ExpectType number[]
    })
  });

  describe('with a subtype of the array\'s elements', () => {
    it('uncurried', () => {
      // @ts-expect-error
      append(true, listOfNumbersAndStrings)
      const result = append(4, listOfNumbersAndStrings)
      result // $ExpectType (string | number)[]
    })

    it('curried', () => {
      // @ts-expect-error
      append(true)(listOfNumbersAndStrings)
      const result = append(4)(listOfNumbersAndStrings)
      result // $ExpectType (string | number)[]
    })
  });

  describe('expanding the type of the array\'s elements', () => {
    it('uncurried', () => {
      // @ts-expect-error
      append("d", listOfNumbers)
      const result = append<string | number>("d", listOfNumbers)
      result // $ExpectType (string | number)[]
    })

    it('curried', () => {
      // @ts-expect-error
      append("d")(listOfNumbers)
      const appendD = append("d");
      const result = appendD<string | number>(listOfNumbers)
      result // $ExpectType (string | number)[]
    })
  });
})
