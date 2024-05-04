import { getData } from "shared/lib/api";

export const getServices = () => {
	return getData("services/get");
}
