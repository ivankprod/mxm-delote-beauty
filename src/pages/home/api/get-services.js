import { getData } from "shared/lib/api";

import { servicesModel } from "pages/home/model";

/**
 * API получения услуг с сервера.
 * Все страницы при page = 0
 *
 * @param {number} page - запрашиваемая страница
 * @returns {Promise}
 */
export const getServices = (page = 0) => {
	return getData(
		"services/get",
		`page=${page}&per_page=${servicesModel.SERVICES_PER_PAGE}`
	);
}
