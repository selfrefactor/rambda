import { assoc } from './assoc.js';
import { lens } from './lens.js';
import { prop } from './prop.js';
import { view } from './view.js';

const testObject = { foo: 'Led Zeppelin' };
const assocLens = lens(prop('foo'), assoc('foo'));

test('happy', () => {
	expect(view(assocLens, testObject)).toBe('Led Zeppelin');
});
