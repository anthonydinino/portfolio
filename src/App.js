import Header from "./components/Header";
import "./fonts.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";

export const AppContext = React.createContext();

function App() {
  //check if app is using mobile view
  const [state, setState] = useState({ isMobileView: false });
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setState(() => ({ isMobileView: true }))
        : setState(() => ({ isMobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <AppContext.Provider value={state}>
      <Header />
      <Content />
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
