import { type NonEmptyArray, groupBy, mapObjIndexed } from 'rambda';
import { prop } from 'ramda';

interface Thing {
	name: string;
	position: string;
}

const things = [
	{ name: 'one', position: 'left' },
	{ name: 'two', position: 'left' },
	{ name: 'three', position: 'right' },
	{ name: 'four', position: 'right' },
];

describe('R.groupBy', () => {
	it('happy', () => {
		const groupByFn = (x: string) => String(x.length);
		const list = ['foo', 'barr'];

		const result = groupBy(groupByFn, list);
		result; // $ExpectType { [index: string]: string[]; }

		const curriedResult = groupBy(groupByFn)(list);
		curriedResult; // $ExpectType { [index: string]: string[]; }
	});
	it('with one explicit types', () => {
		const groupByPosition = groupBy<Thing>(prop('position'));

		const result = groupByPosition(things);
		result; // $ExpectType { [index: string]: Thing[]; }
		result[9]; // $ExpectType Thing[]
		result.foo; // $ExpectType Thing[]
	});
	it('non-empty array', () => {
		interface Sample {
			_tag: string;
			name: string;
			value: number;
		}
		
		const samples: Sample[] = [
			{ _tag: "A", name: "foo", value: 1 },
			{ _tag: "A", name: "bar", value: 2 },
			{ _tag: "B", name: "baz", value: 3 },
			{ _tag: "B", name: "qux", value: 4 },
		];
		
		const groupedSamples = groupBy((sample) => sample._tag, samples);
		
		function getSampleGroupMax(samples: NonEmptyArray<Sample>): number {
			if (samples.length === 0) {
				samples // I expect this to be never
			}
			return Math.max(...samples.map((sample) => sample.value));
		}
		
		const processedGroups = mapObjIndexed(getSampleGroupMax, groupedSamples);

		processedGroups; // $ExpectType Dictionary<number>
	});
});
