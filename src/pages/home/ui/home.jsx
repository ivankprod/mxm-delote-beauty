import Card, { cardModel } from "widgets/card";

import svgMouse from "app/assets/svg/mouse.svg";
import svgQuotes from "app/assets/svg/quotes.svg";

import imgServicesHairdress from "app/assets/images/services/hairdress.jpg";
import imgServicesManicure from "app/assets/images/services/manicure.jpg";
import imgServicesPedicure from "app/assets/images/services/pedicure.jpg";
import imgServicesCosmetology from "app/assets/images/services/cosmetology.jpg";
import imgServicesBodyEsthetician from "app/assets/images/services/body-esthetician.jpg";
import imgServicesMakeUp from "app/assets/images/services/make-up.jpg";

import "./home.scss";

/**
 * Главная страница
 *
 * @component
 */
export const HomePage = () => {
	return (
		<main className="content">
			<section className="content__section first-screen">
				<p className="first-screen__text">
					Салон красоты
					<br />
					«Delote-Beauty»
					<br />
					на Крестовском
				</p>
				<div className="mouse-down">
					<div className="mouse-down__icon">
						<img
							src={svgMouse}
							height={30}
							width={20}
							draggable={false}
						/>
					</div>
					<div className="mouse-down__text">Прокрутите вниз</div>
				</div>
			</section>
			<section className="content__section content__section_about">
				<img src={svgQuotes} height={64} width={80} draggable={false} />
				<p className="about__text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
					arcu nibh vitae amet. Ipsum, pharetra donec ornare velit. Id
					at quisque accumsan risus ac ipsum ut. Sit elit, facilisi
					proin non malesuada sociis tristique. Viverra augue lorem ut
					quisque quam tortor, malesuada iaculis. Et elementum at
					nulla venenatis, faucibus integer. Auctor neque eros,
					viverra rutrum. Fames ultrices condimentum tortor nec
					penatibus. Velit imperdiet sapien fringilla vestibulum sit
					fames.
				</p>
			</section>
			<section className="content__section content__section_services">
				<Card
					type={cardModel.CARD_TYPE.bordered}
					image={
						<img
							src={imgServicesHairdress}
							height={300}
							width={396}
							draggable={false}
						/>
					}
				>
					<p className="card__caption">
						Парикмахерские услуги
					</p>
				</Card>
				<Card
					type={cardModel.CARD_TYPE.bordered}
					image={
						<img
							src={imgServicesManicure}
							height={300}
							width={396}
							draggable={false}
						/>
					}
				>
					<p className="card__caption">
						Маникюр
					</p>
				</Card>
				<Card
					type={cardModel.CARD_TYPE.bordered}
					image={
						<img
							src={imgServicesPedicure}
							height={300}
							width={396}
							draggable={false}
						/>
					}
				>
					<p className="card__caption">
						Педикюр
					</p>
				</Card>
				<Card
					type={cardModel.CARD_TYPE.bordered}
					image={
						<img
							src={imgServicesCosmetology}
							height={300}
							width={396}
							draggable={false}
						/>
					}
				>
					<p className="card__caption">
						Косметология
					</p>
				</Card>
				<Card
					type={cardModel.CARD_TYPE.bordered}
					image={
						<img
							src={imgServicesBodyEsthetician}
							height={300}
							width={396}
							draggable={false}
						/>
					}
				>
					<p className="card__caption">
						Эстетист по телу
					</p>
				</Card>
				<Card
					type={cardModel.CARD_TYPE.bordered}
					image={
						<img
							src={imgServicesMakeUp}
							height={300}
							width={396}
							draggable={false}
						/>
					}
				>
					<p className="card__caption">
						Визаж
					</p>
				</Card>
			</section>
		</main>
	);
};

export default HomePage;
