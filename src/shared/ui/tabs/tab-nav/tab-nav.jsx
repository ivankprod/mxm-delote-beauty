import { Dispatch } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./tab-nav.scss";

/**
 * Пункт навигации по табам
 *
 * @component
 *
 * @param {object} props
 * @param {string} props.id - ID пункта
 * @param {string} props.title - заголовок
 * @param {string} props.tabActiveID - ID активного пункта
 * @param {Dispatch} props.setTabActiveID - функция изменения активного пункта
 */
export const TabNav = ({ id, title, tabActiveID, setTabActiveID }) => {
	const tabSwitchHandler = () => {
		setTabActiveID(id);
	};

	return (
		<li
			onClick={tabSwitchHandler}
			className={clsx([
				"tab__nav",
				{ "tab__nav_active": tabActiveID === id }
			])}
		>
			{title}
		</li>
	);
};

TabNav.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	tabActiveID: PropTypes.string.isRequired,
	setTabActiveID: PropTypes.func.isRequired
};
