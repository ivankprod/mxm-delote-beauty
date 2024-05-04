export const getData = async (url, params = "") => {
	let res = null;

	try {
		const resp = await fetch(
			`${import.meta.env.VITE_API_URL}/${url}?c=${String(
				Math.floor(Math.random() * 100)
			)}${params != "" ? "&" + params : ""}`
		);

		res = resp.ok ? await resp.json() : null;
	} catch (e) {
		throw new Error(e);
	} finally {
		return res;
	}
};
