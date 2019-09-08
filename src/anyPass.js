function anyPassFn(predicates, input){
  let counter = 0
  while (counter < predicates.length){
    if (predicates[ counter ](input)){
      return true
    }
    counter++
  }

  return false
}

/**
 * Takes a list of predicates with input and returns a boolean.
 *
 * @example
 *
 *      const isClub = R.propEq('suit', '♣');
 *      const isSpade = R.propEq('suit', '♠');
 *      const isBlackCard = R.anyPass(
 *        [isClub, isSpade],
 *        {rank: '10', suit: '♣'}
 *      ); //=> true
 */

export function anyPass(predicates, input){
  if (arguments.length === 1) return _input => anyPassFn(predicates, _input)

  return anyPassFn(predicates, input)
}
