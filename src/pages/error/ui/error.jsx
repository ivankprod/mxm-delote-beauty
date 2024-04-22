import { useRouteError } from "react-router-dom";

import { useCustomError } from "shared/lib/hooks";

/**
 * Страница ошибки
 *
 * @component
 */
export const ErrorPage = () => {
	const error = useRouteError();
	const errorCustomText = useCustomError(error.status);

	return (
		<h1>Ошибка {error.status}: {errorCustomText}</h1>
	);
};

export default ErrorPage;
