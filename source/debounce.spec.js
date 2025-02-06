import { debounce } from './debounce.js';
import { delay } from './delay.js';

test('happy', async () => {
	let counter = 0;
	let aHolder;

	const inc = (a) => {
		aHolder = a;
		counter++;
	};
	const incWrapped = debounce(inc, 500);

	incWrapped(1);
	expect(counter).toBe(0);

	await delay(200);

	incWrapped(2);
	expect(counter).toBe(0);

	await delay(700);
	expect(counter).toBe(1);
	expect(aHolder).toBe(2);
});

test('immediate debounce', async () => {
	let counter = 0;
	const inc = () => {
		counter++;
	};

	const incWrapped = debounce(inc, 500, true);
	incWrapped();
	expect(counter).toBe(1);
	await delay(200);
	incWrapped();
	expect(counter).toBe(1);
	await delay(700);
	incWrapped();
	expect(counter).toBe(2);
});
