import { useRouteError } from "react-router-dom";

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

	return (
		<Layout>
			<main className="content content_error">
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
