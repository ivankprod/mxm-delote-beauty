import { v4 as uuid } from "uuid";

import imgServicesHairdress from "app/assets/images/services/hairdress.jpg";
import imgServicesManicure from "app/assets/images/services/manicure.jpg";
import imgServicesPedicure from "app/assets/images/services/pedicure.jpg";
import imgServicesCosmetology from "app/assets/images/services/cosmetology.jpg";
import imgServicesBodyEsthetician from "app/assets/images/services/body-esthetician.jpg";
import imgServicesMakeUp from "app/assets/images/services/make-up.jpg";

export const HomeServices = [
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
