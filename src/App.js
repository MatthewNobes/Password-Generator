import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import css from "./App.module.css";
import Header from "./Components/Header/Header";
import PasswordGenerator from "./Features/PasswordGenerator";
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
          <PasswordGenerator />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
