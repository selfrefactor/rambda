import {reduceBy} from 'rambda'

test('R.reduceBy', () => {
  interface Student {
    name: string,
    score: number,
  }

  const reduceToNamesBy = reduceBy(
    (acc: string[], student: Student) => acc.concat(student.name),
    []
  )
  const students = [
    {name: 'Lucy', score: 92},
    {name: 'Drew', score: 85},
    {name: 'Bart', score: 62},
  ]
  const result = reduceToNamesBy(student => {
    const score = student.score
    return score < 65
      ? 'F'
      : score < 70
        ? 'D'
        : score < 80
          ? 'C'
          : score < 90
            ? 'B'
            : 'A'
  }, students)
  result // $ExpectType { [index: string]: string[]; }
})
