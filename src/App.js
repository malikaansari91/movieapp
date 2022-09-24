import { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeModeContext } from "./contexts.js";
import { getAppTheme } from "./styles/theme";
import { Button } from "@mui/material";
import { routes } from "./config";
import { Layout } from "./components/Layout/Layout";

function App() {
  const [mode, setMode] = useState("dark");

  const themeMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  const addRoute = (route) => (
    <Route
      key={route.key}
      path={route.path}
      element={route.component || <div>hi</div>}
      exact
    />
  );

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              {routes.map((route) =>
                route.subRoutes
                  ? route.subRoutes.map((item) => addRoute(item))
                  : addRoute(route)
              )}
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
