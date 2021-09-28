import React from "react";
import Dashboard from "./containers/Dashboard";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useThemeContext } from "./context/themeContext";
import './App.css';

const App = () => {
  const { theme } = useThemeContext();
  const ThemeRule = theme.toString();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Dashboard themeRule={ThemeRule} />
    </ThemeProvider>
  );
};

export default App;
