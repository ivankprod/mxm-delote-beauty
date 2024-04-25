import { ReactNode } from "react";
import PropTypes from "prop-types";

import { CARD_TYPE } from "widgets/card/model";

import "./card.scss";

/**
 * Хедер
 *
 * @component
 *
 * @param {object} props
 * @param {CARD_TYPE} props.type - тип карточки
 * @param {ReactNode} props.image - изображение
 * @param {ReactNode} props.children - внутренние элементы
 */
export const Card = ({
	type = CARD_TYPE.borderless,
	image = undefined,
	children = undefined
}) => {
	return (
		<div className={`card card_type_${type}`}>
			{image && <div className="card__image-wrapper">{image}</div>}
			{children && <div className="card__elements">{children}</div>}
		</div>
	);
};

Card.propTypes = {
	type: PropTypes.string,
	image: PropTypes.node,
	children: PropTypes.node
};

export default Card;
