import { reduceBy } from './reduceBy.js'
import { prop } from './prop.js'

const byType = prop('type')
const sumValues = function (acc, obj){
  return acc + obj.val
}

const grade = function (score){
  return score < 65 ?
    'F' :
    score < 70 ?
      'D' :
      score < 80 ?
        'C' :
        score < 90 ?
          'B' :
          'A'
}

const byGrade = function (student){
  return grade(student.score || 0)
}

test('splits the list into groups according to the grouping function', () => {
  const collectNames = function (acc, student){
    return acc.concat(student.name)
  }
  expect(reduceBy(
    collectNames, [], byGrade, getStudents()
  )).toEqual({
    A : [ 'Dianne', 'Gillian' ],
    B : [ 'Abby', 'Chris', 'Irene' ],
    C : [ 'Brad', 'Hannah' ],
    D : [ 'Fred', 'Jack' ],
    F : [ 'Eddy' ],
  })
})

test('splits the list into mutation-free groups', () => {
  const collectNames = function (acc, student){
    acc.push(student.name)

    return acc
  }
  expect(reduceBy(
    collectNames, [], byGrade, getStudents()
  )).toEqual({
    A : [ 'Dianne', 'Gillian' ],
    B : [ 'Abby', 'Chris', 'Irene' ],
    C : [ 'Brad', 'Hannah' ],
    D : [ 'Fred', 'Jack' ],
    F : [ 'Eddy' ],
  })
})

test('returns an empty object if given an empty array', () => {
  expect(reduceBy(
    sumValues, 0, byType, []
  )).toEqual({})
})

function getStudents(){
  return [
    {
      name  : 'Abby',
      score : 84,
    },
    {
      name  : 'Brad',
      score : 73,
    },
    {
      name  : 'Chris',
      score : 89,
    },
    {
      name  : 'Dianne',
      score : 99,
    },
    {
      name  : 'Eddy',
      score : 58,
    },
    {
      name  : 'Fred',
      score : 67,
    },
    {
      name  : 'Gillian',
      score : 91,
    },
    {
      name  : 'Hannah',
      score : 78,
    },
    {
      name  : 'Irene',
      score : 85,
    },
    {
      name  : 'Jack',
      score : 69,
    },
  ]
}
