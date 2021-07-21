import Navbar from "./components/Navbar";
import "./fonts.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Error from "./routes/Error";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ThemeProvider,
  createMuiTheme,
  useMediaQuery,
  Drawer,
} from "@material-ui/core";
import About from "./routes/About";

export const AppContext = React.createContext();
//override default theme

function App() {
  //override theme
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        sm: 738,
      },
    },

    palette: {
      primary: {
        main: "#2F4858",
      },
      secondary: {
        main: "#00BEFF",
      },
    },
    typography: {
      button: {
        fontWeight: "bolder",
        fontFamily: "Tahoma",
      },
      allVariants: {
        fontFamily: "Montserrat",
      },
      h2: {
        margin: "1rem",
        fontWeight: "bold",
      },
      h4: {
        margin: "1rem",
        fontWeight: "bold",
      },
      h6: {
        fontWeight: "Bold",
      },
    },
    props: {
      MuiButton: {
        variant: "outlined",
        color: "inherit",
      },
      MuiLink: {
        color: "inherit",
      },
    },
  });
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [state, setState] = useState({
    navBarHeight: 64,
    footerHeight: 64 + 24,
    isDesktop: matches,
  });

  useEffect(() => {
    setState({ ...state, isDesktop: matches });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={state}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Drawer variant="permanent"></Drawer>
          <Footer />
        </Router>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
