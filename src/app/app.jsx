import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route,
} from "react-router-dom";

import ScopeContext from "app/context";

import "app/styles/app.scss";

import Layout from "shared/ui/layout";

import ErrorPage from "pages/error";
import HomePage from "pages/home";
import MastersPage from "pages/masters";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/mxm-delote-beauty"
			element={<Layout />}
			errorElement={<ErrorPage />}
		>
			<Route element={<HomePage />} />
			<Route index element={<HomePage />} />
			<Route
				path="/mxm-delote-beauty/masters"
				element={<MastersPage />}
			/>
		</Route>
	)
);

const App = () => {
	const [scope, setScope] = useState("error");
	const ctxValue = { scope, setScope };

	return (
		<ScopeContext.Provider value={ctxValue}>
			<RouterProvider router={router} />
		</ScopeContext.Provider>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
