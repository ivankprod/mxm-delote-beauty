import { useContext, useEffect } from "react";

import ScopeContext from "app/context";

import { servicesModel, portfolioModel } from "pages/home/model";

import Card, { cardModel } from "widgets/card";
import Tabs from "widgets/tabs";

import svgMouse from "app/assets/svg/mouse.svg";
import svgQuotes from "app/assets/svg/quotes.svg";
import svgLogotypeKevinMurphy from "app/assets/svg/logotypes/kevin-murphy.svg";
import svgLogotypeOribe from "app/assets/svg/logotypes/oribe.svg";
import svgLogotypeAlterna from "app/assets/svg/logotypes/alterna.svg";
import svgLogotypeAldoCoppola from "app/assets/svg/logotypes/aldo-coppola.svg";

import "./home.scss";

/**
 * Главная страница
 *
 * @component
 */
export const HomePage = () => {
	const { scope, setScope } = useContext(ScopeContext);

	const [services, fetchServices] = servicesModel.useServices();

	useEffect(() => {
		setScope("home");

		fetchServices();
	}, []);

	return (
		<main className={`content content_${scope}`}>
			<section className="content__section content__section_first-screen">
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
				{services.map(({ id, title, image }) => (
					<Card
						key={id}
						type={cardModel.CARD_TYPE.bordered}
						image={
							<img
								src={image}
								height={300}
								width={396}
								draggable={false}
							/>
						}
					>
						<p className="card__caption">{title}</p>
					</Card>
				))}
			</section>
			<section className="content__section content__section_logotypes">
				<div className="logotype">
					<img
						height={108}
						src={svgLogotypeKevinMurphy}
						draggable={false}
					/>
				</div>
				<div className="logotype">
					<img
						height={120}
						src={svgLogotypeOribe}
						draggable={false}
					/>
				</div>
				<div className="logotype">
					<img
						height={98}
						src={svgLogotypeAlterna}
						draggable={false}
					/>
				</div>
				<div className="logotype">
					<img
						height={108}
						src={svgLogotypeAldoCoppola}
						draggable={false}
					/>
				</div>
			</section>
			<section className="content__section content__section_portfolio">
				<h1 className="portfolio__h1">Наши работы</h1>
				<Tabs
					data={portfolioModel.HomePortfolio.map((portfolio) => ({
						id: portfolio.id,
						title: portfolio.title,
						content: portfolio.images.map((image) => (
							<Card
								key={image}
								type={cardModel.CARD_TYPE.borderless}
								image={
									<img
										src={image}
										height={416}
										width={416}
										draggable={false}
									/>
								}
							/>
						)),
						contentClassName: "portfolio__content"
					}))}
				/>
			</section>
		</main>
	);
};

export default HomePage;
