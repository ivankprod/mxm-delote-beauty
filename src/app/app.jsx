import React from "react";
import ReactDOM from "react-dom/client";
import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route
} from "react-router-dom";

import "app/styles/app.scss";

import MainLayout from "shared/ui/layout";

import ErrorPage from "pages/error";
import HomePage from "pages/home";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/mxm-delote-beauty"
			element={<MainLayout />}
			errorElement={<ErrorPage />}
		>
			<Route errorElement={<ErrorPage />}>
				<Route index element={<HomePage />} />
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
