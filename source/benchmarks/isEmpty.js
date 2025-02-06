const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const isEmpty = [
  {
    label: 'Rambda',
    fn: () => {
      R.isEmpty(undefined)
      R.isEmpty('')
      R.isEmpty(null)
      R.isEmpty(' ')
      R.isEmpty(/(?:)/)
      R.isEmpty([])
      R.isEmpty([[]])
      R.isEmpty({})
      R.isEmpty({ x: 0 })
      R.isEmpty(0)
      R.isEmpty(Number.NaN)
      R.isEmpty([''])
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.isEmpty(undefined)
      Ramda.isEmpty('')
      Ramda.isEmpty(null)
      Ramda.isEmpty(' ')
      Ramda.isEmpty(/(?:)/)
      Ramda.isEmpty([])
      Ramda.isEmpty([[]])
      Ramda.isEmpty({})
      Ramda.isEmpty({ x: 0 })
      Ramda.isEmpty(0)
      Ramda.isEmpty(Number.NaN)
      Ramda.isEmpty([''])
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.isEmpty(undefined)
      _.isEmpty('')
      _.isEmpty(null)
      _.isEmpty(' ')
      _.isEmpty(/(?:)/)
      _.isEmpty([])
      _.isEmpty([[]])
      _.isEmpty({})
      _.isEmpty({ x: 0 })
      _.isEmpty(0)
      _.isEmpty(Number.NaN)
      _.isEmpty([''])
    },
  },
]

module.exports = isEmpty
