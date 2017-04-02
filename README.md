[![Build Status](https://travis-ci.org/selfrefactor/ils.svg?branch=master)](https://travis-ci.org/selfrefactor/rambda)
[![codecov](https://codecov.io/gh/selfrefactor/rambda/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/rambda)

# Rambda

Faster alternative to **Ramda** in just 7kB

## Argumentation

I admire ***Ramda*** as it is great library in what it does, but I used only small part of what it offers.

I wanted to optimize the size of my bundle, but already developed Ramda habits.

This lead me to the idea to recreate the funtionality of some Ramda methods and export that as library.

## Example use

```
const R = require("rambda")
const result = R.compose(
  R.filter(val => val>2),
  R.flatten,
)([ [1], [2], [3], 4])
console.log(result) // => [3,4]
```

## Install

- Use **npm i rambda** for Webpack and Node.js

- For browser usage include in your HTML

```
https://cdnjs.cloudflare.com/ajax/libs/rambda/0.5.6/webVersion.js
```

## Differences between Rambda and Ramda
Rambda shadows only small part of the Ramda's API.

A few things to note:

- Rambda's methods should be compatible with most of the basic Ramda's methods. For more complex and Ramda specific methods(such as **R.__**), you should expect a mismatch.

- **Rambda** is tested for compatability with **Ramda.flip**, as this method could be useful in some cases.

- Rambda's **equals** doesn't protect against circular structures as **Ramda.equals** does

- Rambda's **map/filter** works only for arrays, while Ramda's **map/filter** accept also objects

- Rambda's **type** detect async functions. The returned value is `"Async"`

## Benchmark

[Scroll to API](#api-list)

![Screen](/screens/screen1.png)
![Screen](/screens/screen2.png)

## Disclaimer

- Documentation of the methods below is scraped from Ramda's website and could be removed in the future, if requested from Ramda's side.

## API

## api-list

#### add

- Adds two values.

```javascript
R.add(2, 3);       //=>  5
R.add(7)(10);      //=> 17
```

#### adjust

- Applies a function to the value at the given index of an array, returning a
new copy of the array with the element at the given index replaced with the
result of the function application.

```javascript
R.adjust(R.add(10), 1, [0, 1, 2]);     //=> [0, 11, 2]
R.adjust(R.add(10))(1)([0, 1, 2]);     //=> [0, 11, 2]
```

#### any

- Returns true if at least one of elements of the list match the predicate,
false otherwise.
Dispatches to the any method of the second argument, if present.
Acts as a transducer if a transformer is given in list position.

```javascript
var lessThan0 = R.flip(R.lt)(0);
var lessThan2 = R.flip(R.lt)(2);
R.any(lessThan0)([1, 2]); //=> false
R.any(lessThan2)([1, 2]); //=> true
```

#### append

- Returns a new list containing the contents of the given list, followed by
the given element.

```javascript
R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
R.append('tests', []); //=> ['tests']
R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
```

#### contains

- Returns true if the specified value is equal, in R.equals terms, to at
least one element of the given list; false otherwise.

```javascript
R.contains(3, [1, 2, 3]); //=> true
R.contains(4, [1, 2, 3]); //=> false
R.contains([42], [[42]]); //=> true
```

#### drop

- Returns all but the first n elements of the given list, string, or
transducer/transformer (or object with a drop method).
Dispatches to the drop method of the second argument, if present.

```javascript
R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
R.drop(3, ['foo', 'bar', 'baz']); //=> []
R.drop(4, ['foo', 'bar', 'baz']); //=> []
R.drop(3, 'ramda');               //=> 'da'
```

#### dropLast

- Returns a list containing all but the last n elements of the given list.

```javascript
R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
R.dropLast(3, 'ramda');               //=> 'ra'
```

#### equals

- Returns true if its arguments are equivalent, false otherwise. Handles
cyclical data structures.
Dispatches symmetrically to the equals methods of both arguments, if
present.

```javascript
R.equals(1, 1); //=> true
R.equals(1, '1'); //=> false
R.equals([1, 2, 3], [1, 2, 3]); //=> true

var a = {}; a.v = a;
var b = {}; b.v = b;
R.equals(a, b); //=> true
```

#### filter

- Takes a predicate and a "filterable", and returns a new filterable of the
same type containing the members of the given filterable which satisfy the
given predicate.
Dispatches to the filter method of the second argument, if present.
Acts as a transducer if a transformer is given in list position.

```javascript
var isEven = n => n % 2 === 0;

R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]

R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
```

#### find

- Returns the first element of the list which matches the predicate, or
undefined if no element matches.
Dispatches to the find method of the second argument, if present.
Acts as a transducer if a transformer is given in list position.

```javascript
var xs = [{a: 1}, {a: 2}, {a: 3}];
R.find(R.propEq('a', 2))(xs); //=> {a: 2}
R.find(R.propEq('a', 4))(xs); //=> undefined
```

#### findIndex

- Returns the index of the first element of the list which matches the
predicate, or -1 if no element matches.
Dispatches to the findIndex method of the second argument, if present.
Acts as a transducer if a transformer is given in list position.

```javascript
var xs = [{a: 1}, {a: 2}, {a: 3}];
R.findIndex(R.propEq('a', 2))(xs); //=> 1
R.findIndex(R.propEq('a', 4))(xs); //=> -1
```

#### flatten

- Returns a new list by pulling every item out of it (and all its sub-arrays)
and putting them in a new array, depth-first.

```javascript
R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```

#### head

- Returns the first element of the given list or string. In some libraries
this function is named first.

```javascript
R.head(['fi', 'fo', 'fum']); //=> 'fi'
R.head([]); //=> undefined

R.head('abc'); //=> 'a'
R.head(''); //=> ''
```

#### indexOf

- Returns the position of the first occurrence of an item in an array, or -1
if the item is not included in the array. R.equals is used to determine
equality.

```javascript
R.indexOf(3, [1,2,3,4]); //=> 2
R.indexOf(10, [1,2,3,4]); //=> -1
```

#### init

- Returns all but the last element of the given list or string.

```javascript
R.init([1, 2, 3]);  //=> [1, 2]
R.init([1, 2]);     //=> [1]
R.init([1]);        //=> []
R.init([]);         //=> []

R.init('abc');  //=> 'ab'
R.init('ab');   //=> 'a'
R.init('a');    //=> ''
R.init('');     //=> ''
```

#### join

- Returns a string made by inserting the separator between each element and
concatenating all the elements into a single string.

```javascript
var spacer = R.join(' ');
spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
R.join('|', [1, 2, 3]);    //=> '1|2|3'
```

#### last

- Returns the last element of the given list or string.

```javascript
R.last(['fi', 'fo', 'fum']); //=> 'fum'
R.last([]); //=> undefined

R.last('abc'); //=> 'c'
R.last(''); //=> ''
```

#### length

- Returns the number of elements in the array by returning list.length.

```javascript
R.length([]); //=> 0
R.length([1, 2, 3]); //=> 3
```

#### map

- Takes a function and
a functor,
applies the function to each of the functor's values, and returns
a functor of the same shape.
Ramda provides suitable map implementations for Array and Object,
so this function may be applied to [1, 2, 3] or {x: 1, y: 2, z: 3}.
Dispatches to the map method of the second argument, if present.
Acts as a transducer if a transformer is given in list position.
Also treats functions as functors and will compose them together.

```javascript
var double = x => x * 2;

R.map(double, [1, 2, 3]); //=> [2, 4, 6]

R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
```

#### match

- Tests a regular expression against a String. Note that this function will
return an empty array when there are no matches. This differs from
String.prototype.match
which returns null when there are no matches.

```javascript
R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
R.match(/a/, 'b'); //=> []
R.match(/a/, null); //=> TypeError: null does not have a method named "match"
```

#### merge

- Create a new object with the own properties of the first object merged with
the own properties of the second object. If a key exists in both objects,
the value from the second object will be used.

```javascript
R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
//=> { 'name': 'fred', 'age': 40 }

var resetToDefault = R.merge(R.__, {x: 0});
resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
```

#### omit

- Returns a partial copy of an object omitting the keys specified.

```javascript
R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
```

#### path

- Retrieve the value at a given path.

```javascript
R.path(['a', 'b'], {a: {b: 2}}); //=> 2
R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
```

#### pick

- Returns a partial copy of an object containing only the keys specified. If
the key does not exist, the property is ignored.

```javascript
R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
```

#### prepend

- Returns a new list with the given element at the front, followed by the
contents of the list.

```javascript
R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
```

#### prop

- Returns a function that when supplied an object returns the indicated
property of that object, if it exists.

```javascript
R.prop('x', {x: 100}); //=> 100
R.prop('x', {}); //=> undefined
```

#### propEq

- Returns true if the specified object property is equal, in R.equals
terms, to the given value; false otherwise.

```javascript
var abby = {name: 'Abby', age: 7, hair: 'blond'};
var fred = {name: 'Fred', age: 12, hair: 'brown'};
var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
var alois = {name: 'Alois', age: 15, disposition: 'surly'};
var kids = [abby, fred, rusty, alois];
var hasBrownHair = R.propEq('hair', 'brown');
R.filter(hasBrownHair, kids); //=> [fred, rusty]
```

#### range

- Returns a list of numbers from from (inclusive) to to (exclusive).

```javascript
R.range(1, 5);    //=> [1, 2, 3, 4]
R.range(50, 53);  //=> [50, 51, 52]
```

#### repeat

- Returns a fixed list of size n containing a specified identical value.

```javascript
R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']

var obj = {};
var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
repeatedObjs[0] === repeatedObjs[1]; //=> true
```

#### replace

- Replace a substring or regex match in a string with a replacement.

```javascript
R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'

// Use the "g" (global) flag to replace all occurrences:
R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
```

#### sort

- Returns a copy of the list, sorted according to the comparator function,
which should accept two values at a time and return a negative number if the
first value is smaller, a positive number if it's larger, and zero if they
are equal. Please note that this is a copy of the list. It does not
modify the original.

```javascript
var diff = function(a, b) { return a - b; };
R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
```

#### sortBy

- Sorts the list according to the supplied function.

```javascript
var sortByFirstItem = R.sortBy(R.prop(0));
var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
var pairs = [[-1, 1], [-2, 2], [-3, 3]];
sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
var alice = {
  name: 'ALICE',
  age: 101
};
var bob = {
  name: 'Bob',
  age: -10
};
var clara = {
  name: 'clara',
  age: 314.159
};
var people = [clara, bob, alice];
sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
```

#### split

- Splits a string into an array of strings based on the given
separator.

```javascript
var pathComponents = R.split('/');
R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']

R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
```

#### splitEvery

- Splits a collection into slices of the specified length.

```javascript
R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
```

#### subtract

- Subtracts its second argument from its first argument.

```javascript
R.subtract(10, 8); //=> 2

var minus5 = R.subtract(R.__, 5);
minus5(17); //=> 12

var complementaryAngle = R.subtract(90);
complementaryAngle(30); //=> 60
complementaryAngle(72); //=> 18
```

#### tail

- Returns all but the first element of the given list or string (or object
with a tail method).
Dispatches to the slice method of the first argument, if present.

```javascript
R.tail([1, 2, 3]);  //=> [2, 3]
R.tail([1, 2]);     //=> [2]
R.tail([1]);        //=> []
R.tail([]);         //=> []

R.tail('abc');  //=> 'bc'
R.tail('ab');   //=> 'b'
R.tail('a');    //=> ''
R.tail('');     //=> ''
```

#### take

- Returns the first n elements of the given list, string, or
transducer/transformer (or object with a take method).
Dispatches to the take method of the second argument, if present.

```javascript
R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.take(3, 'ramda');               //=> 'ram'

var personnel = [
  'Dave Brubeck',
  'Paul Desmond',
  'Eugene Wright',
  'Joe Morello',
  'Gerry Mulligan',
  'Bob Bates',
  'Joe Dodge',
  'Ron Crotty'
];

var takeFive = R.take(5);
takeFive(personnel);
//=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
```

#### takeLast

- Returns a new list containing the last n elements of the given list.
If n > list.length, returns a list of list.length elements.

```javascript
R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.takeLast(3, 'ramda');               //=> 'mda'
```

#### test

- Determines whether a given string matches a given regular expression.

```javascript
R.test(/^x/, 'xyz'); //=> true
R.test(/^y/, 'xyz'); //=> false
```

#### toLower

- The lower case version of a string.

```javascript
R.toLower('XYZ'); //=> 'xyz'
```

#### toUpper

- The upper case version of a string.

```javascript
R.toUpper('abc'); //=> 'ABC'
```

#### trim

- Removes (strips) whitespace from both ends of the string.

```javascript
R.trim('   xyz  '); //=> 'xyz'
R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
```

#### type

- Gives a single-word string description of the (native) type of a value,
returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
attempt to distinguish user Object types any further, reporting them all as
'Object'.

```javascript
R.type({}); //=> "Object"
R.type(1); //=> "Number"
R.type(false); //=> "Boolean"
R.type('s'); //=> "String"
R.type(null); //=> "Null"
R.type([]); //=> "Array"
R.type(/[A-z]/); //=> "RegExp"
```

#### uniq

- Returns a new list containing only one copy of each element in the original
list. R.equals is used to determine equality.

```javascript
R.uniq([1, 1, 2, 1]); //=> [1, 2]
R.uniq([1, '1']);     //=> [1, '1']
R.uniq([[42], [42]]); //=> [[42]]
```

#### update

- Returns a new copy of the array with the element at the provided index
replaced with the given value.

```javascript
R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
```

#### values

- Returns a list of all the enumerable own properties of the supplied object.
Note that the order of the output array is not guaranteed across different
JS platforms.

```javascript
R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
```
