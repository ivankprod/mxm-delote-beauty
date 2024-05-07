import { useState } from "react";
import clsx from "clsx";
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
	}, {
		id: uuid(),
		title: "Маникюр",
		image: imgServicesManicure
	}, {
		id: uuid(),
		title: "Педикюр",
		image: imgServicesPedicure
	}, {
		id: uuid(),
		title: "Косметология",
		image: imgServicesCosmetology
	}, {
		id: uuid(),
		title: "Эстетист по телу",
		image: imgServicesBodyEsthetician
	}, {
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
	const [services, setServices] = useState({
		data: initialHomeServices,
		dataPage: null,
		dataCount: null
	});

	const fetchServices = async (page = 0) => {
		const newServices = await getServices(page);

		if (newServices) {
			setServices((oldServices) => {
				return {
					data: newServices.data.map((service, index) => {
						return {
							...service,
							image: oldServices.data[
								limitedKey(index, oldServices.data.length - 1)
							].image
						};
					}),
					dataPage: newServices.dataPage,
					dataCount: newServices.dataCount
				};
			});
		}
	};

	const initPagination = () => {
		let content = [];

		for (let i = 1; i <= Math.floor(services.dataCount / SERVICES_PER_PAGE); i++) {
			content.push(
				<li key={`services-page-${i}-${(new Date).toISOString()}`}>
					<button
						disabled={i === services.dataPage}
						className={clsx({
							"pagination__button": true,
							"pagination__button_active": i === services.dataPage
						})}
						onClick={() => fetchServices(i)}
					>{i}</button>
				</li>
			);
		}

		return <ul className="pagination">{content}</ul>;
	};

	return [services, fetchServices, initPagination];
};
