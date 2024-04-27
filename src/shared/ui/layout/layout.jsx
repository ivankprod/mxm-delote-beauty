import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import { Header, Footer } from "shared/ui";

/**
 * Основной layout
 *
 * @component
 *
 * @param {object} props
 * @param {ReactNode} props.children - внутренние элементы
 */
export const Layout = ({ children = undefined }) => {
	return (
		<>
			<Header />
			<Outlet />
			{children && children}
			<Footer />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node
};

export default Layout;
