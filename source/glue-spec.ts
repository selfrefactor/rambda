import { glue } from 'rambda';

const baz = 'led zeppelin';

describe('R.glue', () => {
	it('happy', () => {
		const result = glue(`
      Foo
      ${baz}
      Bar
    `);
		result; // $ExpectType string
	});

	it('with specified glue char', () => {
		const result = glue(
			`
      Foo
      ${baz}
      Bar
    `,
			'|',
		);
		result; // $ExpectType string
	});
});
