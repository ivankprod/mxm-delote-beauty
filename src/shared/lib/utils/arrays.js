/**
 * Ограничение индекса массива до заданного предела
 *
 * @param {number} index - исходный индекс
 * @param {number} maxIndex - максимально возможный индекс
 *
 * @example
 * const array1 = [1, 2, 3]
 * const array2 = [1, 2, 3, 4, 5]
 * const result = [] // станет [1, 2, 3, 1, 2]
 *
 * array2.map((_, index) => {
 *     result.push(array1[limitedKey(index, array1.length - 1)])
 * })
 * 
 * @returns {number}
 */
export const limitedKey = (index, maxIndex) =>
	index > maxIndex ? limitedKey(index - maxIndex - 1, maxIndex) : index;
