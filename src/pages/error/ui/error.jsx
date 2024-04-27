import { useContext, useEffect } from "react";
import { useRouteError } from "react-router-dom";

import ScopeContext from "app/context";

import Layout from "shared/ui/layout";

import { useCustomError } from "shared/lib/hooks";

import "./error.scss";

/**
 * Страница ошибки
 *
 * @component
 */
export const ErrorPage = () => {
	const error = useRouteError();
	const errorCustomText = useCustomError(error.status);

	const { scope, setScope } = useContext(ScopeContext);

	useEffect(() => {
		setScope("error");
	}, []);

	return (
		<Layout>
			<main className={`content content_${scope}`}>
				<p className="error__text">
					<span className="error__text_size_large">Ошибка {error.status}</span>
					<br />
					{errorCustomText}
				</p>
			</main>
		</Layout>
	);
};

export default ErrorPage;
