
export function insertAtIndex(indexToInsert, valueToInsert) {
	return array => ([
    ...array.slice(0, indexToInsert),
    valueToInsert,
    ...array.slice(indexToInsert),
  ])
}

