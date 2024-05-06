import { useState } from "react";
import { v4 as uuid } from "uuid";

import { getServices } from "pages/home/api";

import { limitedKey } from "shared/lib/utils";

import imgServicesHairdress from "app/assets/images/services/hairdress.jpg";
import imgServicesManicure from "app/assets/images/services/manicure.jpg";
import imgServicesPedicure from "app/assets/images/services/pedicure.jpg";
import imgServicesCosmetology from "app/assets/images/services/cosmetology.jpg";
import imgServicesBodyEsthetician from "app/assets/images/services/body-esthetician.jpg";
import imgServicesMakeUp from "app/assets/images/services/make-up.jpg";

/**
 * Список услуг по умолчанию
 * 
 */
const initialHomeServices = [
	{
		id: uuid(),
		title: "Парикмахерские услуги",
		image: imgServicesHairdress
	},
	{
		id: uuid(),
		title: "Маникюр",
		image: imgServicesManicure
	},
	{
		id: uuid(),
		title: "Педикюр",
		image: imgServicesPedicure
	},
	{
		id: uuid(),
		title: "Косметология",
		image: imgServicesCosmetology
	},
	{
		id: uuid(),
		title: "Эстетист по телу",
		image: imgServicesBodyEsthetician
	},
	{
		id: uuid(),
		title: "Визаж",
		image: imgServicesMakeUp
	}
];

/**
 * Количество услуг на странице
 * 
 */
export const SERVICES_PER_PAGE = initialHomeServices.length;

/**
 * Получение услуг
 * 
 * @hook
 */
export const useServices = () => {
	const [services, setServices] = useState(initialHomeServices);

	const fetchServices = async (page = 1) => {
		const newServices = await getServices(page);

		if (newServices) {
			setServices((oldServices) =>
				newServices.map((service, index) => {
					const oldService = oldServices[limitedKey(index, oldServices.length - 1)];

					return { ...service, image: oldService.image };
				})
			);
		}
	};

	return [services, fetchServices];
};
