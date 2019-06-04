import { merge } from './merge'
import { type } from './type'

/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} fn
 * @param {Array} args
 * @return {Function}
 * @example
 *
 *      const multiply2 = (a, b) => a * b;
 *      const double = R.partialCurry(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      const greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      const sayHello = R.partialCurry(greet, ['Hello']);
 *      const sayHelloToMs = R.partialCurry(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialCurry(f, [a, b])(c, d) = f(a, b, c, d)
 */
export function partialCurry(fn, args = {}){
  return rest => {
    if (type(fn) === 'Async' || type(fn) === 'Promise'){
      return new Promise((resolve, reject) => {
        fn(merge(rest, args))
          .then(resolve)
          .catch(reject)
      })
    }

    return fn(merge(rest, args))
  }
}
