import {groupBy} from 'rambda'
import {groupBy as groupByRamda, prop} from 'ramda'

describe('R.groupBy', () => {
  it('happy', () => {
    const groupByFn = (x: string) => String(x.length)
    const list = ['foo', 'barr']

    const result = groupBy(groupByFn, list)
    result // $ExpectType { [index: string]: string[]; }

    const curriedResult = groupBy(groupByFn)(list)
    curriedResult // $ExpectType { [index: string]: string[]; }
  })
  it('issue test', () => {
    interface Thing {
      name: string;
      position: string;
    }
    
    interface Output {
      left: Thing[];
      right: Thing[];
    }
    
    const things = [
      { name: 'one', position: 'left' },
      { name: 'two', position: 'left' },
      { name: 'three', position: 'right' },
      { name: 'four', position: 'right' },
    ]
    
    const groupByPosition = groupBy<Thing, Output>(prop('position'));
    const groupByPositionX = groupBy<Thing>(prop('position'));

    // $ExpectError
    groupByRamda(prop('position'));
    
    const result = groupByPosition(things)
    const resultx = groupByPositionX(things)
    result // $ExpectType Output
    resultx // $ExpectType { [index: string]: Thing[]; }
  })
})
