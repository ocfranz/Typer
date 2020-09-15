import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./styles/themes";
import Home from "./pages/Home";
import GlobalStyles from "./styles/globalStyles";

const App = () => {
  const theme = useSelector((state) => state.uiReducer.theme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
