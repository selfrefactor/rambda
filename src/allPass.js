/**
 * Takes a list of predicates and returns a new predicate.
 *
 * @example
 *
 *      const isClub = R.propEq('suit', '♣');
 *      const isSpade = R.propEq('suit', '♠');
 *      const isBlackCard = R.allPass(
 *        [isClub, isSpade]
 *      )(
 *        {rank: '10', suit: '♣'}
 *      ); //=> true
 */

export function allPass(predicates){
  return input => {
    let counter = 0
    while (counter < predicates.length){
      if (!predicates[ counter ](input)){
        return false
      }
      counter++
    }

    return true
  }
}
