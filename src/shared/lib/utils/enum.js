/**
 * Создание неизменяемого перечисления
 * 
 * @param {object} obj - объект со значениями перечисления
 */
export const Enum = (obj) => {
	const newObj = {};

	for (const prop in obj)
		if (Object.prototype.hasOwnProperty.call(obj, prop)) newObj[prop] = obj[prop];

	return Object.freeze(newObj);
}
