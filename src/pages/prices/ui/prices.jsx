import { useContext, useEffect } from "react";

import ScopeContext from "app/context";

import { PricesList } from "pages/prices/model";

import imgPrices from "app/assets/images/prices.jpg";

import "./prices.scss";

/**
 * Страница цен
 *
 * @component
 */
export const PricesPage = () => {
	const { scope, setScope } = useContext(ScopeContext);

	useEffect(() => {
		setScope("prices");
	}, []);

	return (
		<main className={`content content_${scope}`}>
			<section className="content__section content__section_prices">
				<h1 className="prices__h1">Цены на услуги</h1>
				<div className="prices__list">
					<img
						className="prices__list-image"
						src={imgPrices}
						height={536}
						width={636}
						draggable={false}
					/>
					<div className="prices__list-entry">
						{PricesList.map(({ id, title, description, price }) => (
							<div key={id} className="list-entry__block">
								<div className="block__caption">
									<span>{title}</span>
									<span>{price} ₽</span>
								</div>
								<div className="block__description">
									{description}
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="prices__list">
					<div className="prices__list-entry">
						{PricesList.map(({ id, title, description, price }) => (
							<div key={id} className="list-entry__block">
								<div className="block__caption">
									<span>{title}</span>
									<span>{price} ₽</span>
								</div>
								<div className="block__description">
									{description}
								</div>
							</div>
						))}
					</div>
					<img
						className="prices__list-image"
						src={imgPrices}
						height={536}
						width={636}
						draggable={false}
					/>
				</div>
				<div className="prices__list">
					<img
						className="prices__list-image"
						src={imgPrices}
						height={536}
						width={636}
						draggable={false}
					/>
					<div className="prices__list-entry">
						{PricesList.map(({ id, title, description, price }) => (
							<div key={id} className="list-entry__block">
								<div className="block__caption">
									<span>{title}</span>
									<span>{price} ₽</span>
								</div>
								<div className="block__description">
									{description}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default PricesPage;
