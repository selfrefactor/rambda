import {add, subtract, compose} from 'rambda'
// import { kebabCase } from 'string-fn';

describe('compose', () => {
  it('happy', () => {
    const result = compose(
      subtract(11),
      add(1),
      add(1),
    )(1)
    result // $ExpectType number
  })

  it('with void', () => {
    const result = compose(
      () => {},
      () => {}
    )();
    result // $ExpectType void
  })

  // TODO
  /*
  it('example', () => {
    const label = compose(
      kebabCase,
      last,
      split('/')
    )(url)

    const result = compose(
      kebabCase,
      (x: string[]) => x[0],
      (x: string) => x.split('/')
    )('url')
    result // $ExpectType void
  })
  */
})
