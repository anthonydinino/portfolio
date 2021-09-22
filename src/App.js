import "./fonts.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import Comments from "./routes/Comments";
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

export const AppContext = React.createContext();
//override default theme

function App() {
  //override theme
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        sm: 900,
      },
    },

    palette: {
      primary: {
        main: "hsl(203, 30%, 26%)",
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
        fontFamily: "Open Sans",
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
    footerHeight: 64,
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
              <About />
              <Projects />
              <Contact />
              <Comments />
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
