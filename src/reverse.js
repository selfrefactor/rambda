/**
 * Returns a new input or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} input
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
export function reverse(input){
  if (typeof input === 'string'){
    return input.split('').reverse()
      .join('')
  }

  const clone = input.slice()

  return clone.reverse()
}
