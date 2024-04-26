import { v4 as uuid } from "uuid";

import imgPortfolio1 from "app/assets/images/portfolio/1.jpg";
import imgPortfolio2 from "app/assets/images/portfolio/2.jpg";
import imgPortfolio3 from "app/assets/images/portfolio/3.jpg";
import imgPortfolio4 from "app/assets/images/portfolio/4.jpg";
import imgPortfolio5 from "app/assets/images/portfolio/5.jpg";
import imgPortfolio6 from "app/assets/images/portfolio/6.jpg";
import imgPortfolio7 from "app/assets/images/portfolio/7.jpg";
import imgPortfolio8 from "app/assets/images/portfolio/8.jpg";
import imgPortfolio9 from "app/assets/images/portfolio/9.jpg";

export const HomePortfolio = [
	{
		id: uuid(),
		title: "Показать все",
		images: [
			imgPortfolio1,
			imgPortfolio2,
			imgPortfolio3,
			imgPortfolio4,
			imgPortfolio5,
			imgPortfolio6,
			imgPortfolio7,
			imgPortfolio8,
			imgPortfolio9
		]
	}, {
		id: uuid(),
		title: "Парикмахерские услуги",
		images: [
			imgPortfolio1,
			imgPortfolio2,
			imgPortfolio3,
			imgPortfolio4,
			imgPortfolio5,
			imgPortfolio6,
			imgPortfolio7,
			imgPortfolio8,
			imgPortfolio9
		]
	}, {
		id: uuid(),
		title: "Маникюр",
		images: [
			imgPortfolio1,
			imgPortfolio2,
			imgPortfolio3,
			imgPortfolio4,
			imgPortfolio5,
			imgPortfolio6,
			imgPortfolio7,
			imgPortfolio8,
			imgPortfolio9
		]
	}, {
		id: uuid(),
		title: "Педикюр",
		images: [
			imgPortfolio1,
			imgPortfolio2,
			imgPortfolio3,
			imgPortfolio4,
			imgPortfolio5,
			imgPortfolio6,
			imgPortfolio7,
			imgPortfolio8,
			imgPortfolio9
		]
	}
];

export default HomePortfolio;
