import { v4 as uuid } from "uuid";

import imgMasters1 from "app/assets/images/masters/1.jpg";
import imgMasters2 from "app/assets/images/masters/2.jpg";
import imgMasters3 from "app/assets/images/masters/3.jpg";
import imgMasters4 from "app/assets/images/masters/4.jpg";
import imgMasters5 from "app/assets/images/masters/5.jpg";

export const MastersList = [
	{
		id: uuid(),
		name: "Елена Васильевна",
		profession: "Визажист",
		image: imgMasters1
	}, {
		id: uuid(),
		name: "Елена Васильевна",
		profession: "Визажист",
		image: imgMasters2
	}, {
		id: uuid(),
		name: "Елена Васильевна",
		profession: "Визажист",
		image: imgMasters1
	}, {
		id: uuid(),
		name: "Елена Васильевна",
		profession: "Визажист",
		image: imgMasters3
	}, {
		id: uuid(),
		name: "Елена Васильевна",
		profession: "Визажист",
		image: imgMasters4
	}, {
		id: uuid(),
		name: "Елена Васильевна",
		profession: "Визажист",
		image: imgMasters5
	}
];
