import {partial} from 'rambda'

describe('partial', () => {
  it('happy', () => {
  function greet(
    salutation: string,
    title: string,
    firstName: string,
    lastName: string,
  ) {
    return `${salutation}, ${title} ${firstName} ${lastName}!`;
  }

  const sayHello = partial(greet, ['Hello']);
  const sayHelloToMs = partial(sayHello, ['Ms.']);
  const result = sayHelloToMs('Jane', 'Jones'); 
    result // $ExpectType string
  })
})
