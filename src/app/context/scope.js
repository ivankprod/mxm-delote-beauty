import { createContext } from "react";

export const ScopeContext = createContext({
	scope: "home",
	setScope: (value) => {}
});

export default ScopeContext;
