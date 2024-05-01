import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route
} from "react-router-dom";

import ScopeContext from "app/context";

import "app/styles/app.scss";

import Layout from "shared/ui/layout";

import {
	ErrorPage,
	HomePage,
	MastersPage,
	PricesPage,
	ContactsPage
} from "pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
			<Route index element={<HomePage />} />
			<Route path="/masters" element={<MastersPage />} />
			<Route path="/prices" element={<PricesPage />} />
			<Route path="/contacts" element={<ContactsPage />} />
		</Route>
	), {
		basename: "/mxm-delote-beauty/"
	}
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
