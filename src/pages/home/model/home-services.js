import { useState } from "react";
import { v4 as uuid } from "uuid";

import { getServices } from "pages/home/api";

import imgServicesHairdress from "app/assets/images/services/hairdress.jpg";
import imgServicesManicure from "app/assets/images/services/manicure.jpg";
import imgServicesPedicure from "app/assets/images/services/pedicure.jpg";
import imgServicesCosmetology from "app/assets/images/services/cosmetology.jpg";
import imgServicesBodyEsthetician from "app/assets/images/services/body-esthetician.jpg";
import imgServicesMakeUp from "app/assets/images/services/make-up.jpg";

export const initialHomeServices = [
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

export const useServices = () => {
	const [services, setServices] = useState(initialHomeServices);

	const fetchServices = async () => {
		const newServices = await getServices();

		if (newServices) {
			setServices(() =>
				services.map((service, index) => {
					const { title } = newServices[index];

					return { ...service, title };
				})
			);
		}
	};

	return [services, fetchServices];
};
