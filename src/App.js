import Navbar from "./components/Navbar";
import "./fonts.css";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const AppContext = React.createContext();

function App() {
  //check if app is using mobile view
  const [state, setState] = useState({ isMobileView: false });
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

  return (
    <AppContext.Provider value={state}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
