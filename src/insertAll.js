import { curry } from './curry';

export function insertAllFn(index, listToInsert, list) {
	return [...list.slice(0, index), ...listToInsert, ...list.slice(index)];
}

export const insertAll = curry(insertAllFn);
