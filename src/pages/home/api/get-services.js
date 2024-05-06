import { getData } from "shared/lib/api";

import { servicesModel } from "pages/home/model";

/**
 * API получения услуг с сервера
 * 
 * @param {number} page - запрашиваемая страница
 * @returns {Promise}
 */
export const getServices = (page) =>
	getData(
		"services/get",
		`page=${page <= 0 ? 1 : page}&per_page=${
			servicesModel.SERVICES_PER_PAGE
		}`
	);
