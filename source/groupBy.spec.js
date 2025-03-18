import { groupBy } from './groupBy.js'

test('with list', () => {
  const inventory = [
		{ name: "asparagus", type: "vegetables", quantity: 9 },
		{ name: "bananas", type: "fruit", quantity: 5 },
		{ name: "goat", type: "meat", quantity: 23 },
		{ name: "cherries", type: "fruit", quantity: 12 },
		{ name: "fish", type: "meat", quantity: 22 },
	];
  const result = groupBy(
		({ quantity }) =>
			quantity < 6 ? "restock" : "sufficient"
	
	)(inventory)
	expect(result.restock).toEqual([
		{ name: "bananas", type: "fruit", quantity: 5 },
	]);
	expect(result.sufficient[0]).toEqual(
		{ name: "asparagus", type: "vegetables", quantity: 9 }
	);
})
