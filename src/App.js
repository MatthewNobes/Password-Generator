import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import css from "./App.module.css";
import { Header, Router, Navigation } from "./Components";
import { getTheme } from "./theme";

const muiCache = createCache({
	key: "mui",
	prepend: true,
});

const App = () => {
	const theme = getTheme();

	return (
		<CacheProvider value={muiCache}>
			<ThemeProvider theme={theme}>
				<div className={css.App}>
					<Header />
					<Router />
					<Navigation />
				</div>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;
