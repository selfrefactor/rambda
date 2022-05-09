import {
  flattenObject,
  flattenObjectHelper,
  transformFlatObject,
} from './flattenObject.js'

test('happy', () => {
  const obj = {
    c : 3,
    d : {
      'd.e' : [ 5, 6, 7 ],
      'd.z' : 4,
      'd.f' : { 'd.f.h' : 6 },
    },
  }
  const result = transformFlatObject(obj)
  console.log(result)
  // expect(result).toEqual({
  //   'c'     : 3,
  //   'd.e'   : [ 5, 6, 7 ],
  //   'd.z'   : 4,
  //   'd.f.h' : 6,
  // })
})

test('happy', () => {
  const result = flattenObject({
    a : 1,
    b : {
      c : 3,
      d : {
        e : 5,
        z : 4,
        f : {
          h : 6,
          i : 7,
          j : {
            k : 8,
            l : 9,
          },
        },
      },
    },
  })
  console.log(`result`, result)
  
//   const expected = {
//     'a'         : 1,
//     'b.c'       : 3,
//     'b.d.e'     : 5,
//     'b.d.z'     : 4,
//     'b.d.f.h'   : 6,
//     'b.d.f.i'   : 7,
//     'b.d.f.j.k' : 8,
//     'b.d.f.j.l' : 9,
//   }
//   expect(result).toEqual(expected)
})

test('flattenObjectHelper', () => {
  const result = flattenObjectHelper({
    a : 1,
    b : {
      c : 3,
      d : {
        e : 5,
        z : 4,
        f : { h : 6 },
      },
    },
  })
  console.log(`result`, result)
  // const expected = {
  //   a : 1,
  //   b : {
  //     'b.c' : 3,
  //     'b.d' : {
  //       'b.d.e' : 5,
  //       'b.d.z' : 4,
  //       'b.d.f' : { 'b.d.f.h' : 6 },
  //     },
  //   },
  // }
  // expect(result).toEqual(expected)
})
