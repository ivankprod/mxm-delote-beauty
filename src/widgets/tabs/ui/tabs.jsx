import { useState } from "react";
import PropTypes from "prop-types";

import { TabNav, TabContent } from "shared/ui/tabs";

import "./tabs.scss";

/**
 * Табы
 *
 * @component
 *
 * @param {object} props
 * @param {{}[]} props.data - данные табов
 */
export const Tabs = ({ data }) => {
	const [tabActive, setTabActive] = useState(data[0].id);

	return (
		<div className="tabs">
			<ul className="tabs__nav">
				{data.map((tab) => (
					<TabNav
						key={`tab-nav-${tab.id}`}
						id={tab.id}
						title={tab.title}
						tabActiveID={tabActive}
						setTabActiveID={setTabActive}
					/>
				))}
			</ul>
			<div className="tabs__content">
				{data.map((tab) => (
					<TabContent
						key={`tab-content-${tab.id}`}
						id={tab.id}
						tabActiveID={tabActive}
						contentClassName={tab.contentClassName}
					>
						{tab.content}
					</TabContent>
				))}
			</div>
		</div>
	);
};

Tabs.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
