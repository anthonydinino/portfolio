import Navbar from "./components/Navbar";
import "./fonts.css";
import Home from "./routes/Home";
import Error from "./routes/Error";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

export const AppContext = React.createContext();

function App() {
  //global variables
  const [state, setState] = useState({
    navBarHeight: "64px",
    isMobileView: false,
  });

  //listen for if screen width is mobile or not
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setState(() => ({ ...state, isMobileView: true }))
        : setState(() => ({ ...state, isMobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  //override theme
  const theme = createMuiTheme({});

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={state}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
