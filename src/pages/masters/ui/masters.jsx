import { useContext, useEffect } from "react";

import ScopeContext from "app/context";

import { MastersList } from "pages/masters/model";

import Card, { cardModel } from "widgets/card";

import "./masters.scss";

/**
 * Страница мастеров
 *
 * @component
 */
export const MastersPage = () => {
	const { scope, setScope } = useContext(ScopeContext);

	useEffect(() => {
		setScope("masters");
	}, []);

	return (
		<main className={`content content_${scope}`}>
			<section className="content__section content__section_masters">
				<h1 className="masters__h1">Наши мастера</h1>
				<div className="masters__list">
					{MastersList.map(({ id, name, profession, image }) => (
						<Card
							key={id}
							type={cardModel.CARD_TYPE.bordered}
							image={
								<img
									src={image}
									height={477}
									width={400}
									draggable={false}
								/>
							}
						>
							<p className="card__caption">
								{name}
								<br />
								<span className="card__caption-text">
									{profession}
								</span>
							</p>
						</Card>
					))}
				</div>
			</section>
		</main>
	);
};

export default MastersPage;
