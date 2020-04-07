import {cond, always, equals} from 'rambda'

describe('cond', () => {
  it('happy', () => {
    const fn = cond<number, string>([
      [equals(0), always('water freezes at 0°C')],
      [equals(100), always('water boils at 100°C')],
      [
        () => true,
        function(temp) {
          return 'nothing special happens at ' + temp + '°C'
        },
      ],
    ])

    const a = fn(0)
    a // $ExpectType string
  })
})
