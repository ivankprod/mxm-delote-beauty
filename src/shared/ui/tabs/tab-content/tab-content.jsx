import { ReactNode } from "react";
import PropTypes from "prop-types";

/**
 * Содержимое таба
 *
 * @component
 *
 * @param {object} props
 * @param {string} props.id - ID пункта навигации
 * @param {string} props.tabActiveID - ID активного пункта навигации
 * @param {string} props.contentClassName - доп. CSS-класс для элемента с содержимым
 * @param {ReactNode} props.children - внутренние элементы содержимого таба
 */
export const TabContent = ({
	id,
	tabActiveID,
	contentClassName = "",
	children
}) => {
	return tabActiveID === id ? (
		<div
			className={`tab__content ${contentClassName}`}
		>
			{children}
		</div>
	) : null;
};

TabContent.propTypes = {
	id: PropTypes.string.isRequired,
	tabActiveID: PropTypes.string.isRequired,
	contentClassName: PropTypes.string,
	children: PropTypes.node.isRequired,
};
