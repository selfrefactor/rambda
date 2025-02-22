import { ascend, prop } from '../rambda.js'
import { sortWith } from './sortWith.js'

const albums = [
  {
    artist: 'Rush',
    genre: 'Rock',
    score: 3,
    title: 'A Farewell to Kings',
  },
  {
    artist: 'Dave Brubeck Quartet',
    genre: 'Jazz',
    score: 3,
    title: 'Timeout',
  },
  {
    artist: 'Rush',
    genre: 'Rock',
    score: 5,
    title: 'Fly By Night',
  },
  {
    artist: 'Daniel Barenboim',
    genre: 'Baroque',
    score: 3,
    title: 'Goldberg Variations',
  },
  {
    artist: 'Glenn Gould',
    genre: 'Baroque',
    score: 3,
    title: 'Art of the Fugue',
  },
  {
    artist: 'Leonard Bernstein',
    genre: 'Romantic',
    score: 4,
    title: 'New World Symphony',
  },
  {
    artist: 'Don Byron',
    genre: 'Jazz',
    score: 5,
    title: 'Romance with the Unseen',
  },
  {
    artist: 'Iron Maiden',
    genre: 'Metal',
    score: 2,
    title: 'Somewhere In Time',
  },
  {
    artist: 'Danny Holt',
    genre: 'Modern',
    score: 1,
    title: 'In Times of Desparation',
  },
  {
    artist: 'Various',
    genre: 'Broadway',
    score: 3,
    title: 'Evita',
  },
  {
    artist: 'Nick Drake',
    genre: 'Folk',
    score: 1,
    title: 'Five Leaves Left',
  },
  {
    artist: 'John Eliot Gardiner',
    genre: 'Classical',
    score: 4,
    title: 'The Magic Flute',
  },
]

test('sorts by a simple property of the objects', () => {
  const sortedAlbums = sortWith([ascend(prop('title'))], albums)
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[0].title).toBe('A Farewell to Kings')
  expect(sortedAlbums[11].title).toBe('Timeout')
})

test('sorts by multiple properties of the objects', () => {
  const sortedAlbums = sortWith(
    [ascend(prop('score')), ascend(prop('title'))],
    albums,
  )
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[0].title).toBe('Five Leaves Left')
  expect(sortedAlbums[1].title).toBe('In Times of Desparation')
  expect(sortedAlbums[11].title).toBe('Romance with the Unseen')
})

test('sorts by 3 properties of the objects', () => {
  const sortedAlbums = sortWith(
    [ascend(prop('genre')), ascend(prop('score')), ascend(prop('title'))],
    albums,
  )
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[0].title).toBe('Art of the Fugue')
  expect(sortedAlbums[1].title).toBe('Goldberg Variations')
  expect(sortedAlbums[11].title).toBe('New World Symphony')
})

test('sorts by multiple properties using ascend and descend', () => {
  const sortedAlbums = sortWith(
    [ascend(prop('score')), ascend(prop('title'))],
    albums,
  )
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[0].title).toBe('Five Leaves Left')
  expect(sortedAlbums[1].title).toBe('In Times of Desparation')
  expect(sortedAlbums[11].title).toBe('Romance with the Unseen')
})

test('sorts only arrays not primitives', () => {
  const result = sortWith(
    [
      (a, b) => (a.a === b.a ? 0 : a.a > b.a ? 1 : -1),
      (a, b) => (a.b === b.b ? 0 : a.b > b.b ? 1 : -1),
    ],
    [
      { a: 1, b: 2 },
      { a: 2, b: 1 },
      { a: 2, b: 2 },
      { a: 1, b: 1 },
    ],
  )
  const expected = [
    { a: 1, b: 1 },
    { a: 1, b: 2 },
    { a: 2, b: 1 },
    { a: 2, b: 2 },
  ]
  expect(result).toEqual(expected)
})
