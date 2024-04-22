import React from "react";
import { Outlet } from "react-router-dom";

/**
 * Главный layout
 *
 * @component
 */
export const MainLayout = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default MainLayout;
