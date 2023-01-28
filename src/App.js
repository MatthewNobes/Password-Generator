import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Header, Router, Navigation } from "./Components";
import { getTheme } from "./theme";
import { Box } from "@mui/material";

const muiCache = createCache({
	key: "mui",
	prepend: true,
});

const App = () => {
	const theme = getTheme();

	return (
		<CacheProvider value={muiCache}>
			<ThemeProvider theme={theme}>
				<Box>
					<Header />
					<Router />
					<Navigation />
				</Box>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;
