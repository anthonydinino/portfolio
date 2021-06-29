import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { AppContext } from "../App";

const Header = () => {
  const { isMobileView } = useContext(AppContext);
  const useStyles = makeStyles(() => ({
    header: {
      position: "static",
      backgroundColor: "#2F4858",
    },
    toolbar: {
      justifyContent: "space-between",
      variant: "dense",
    },
    mobileHeader: {
      alignItems: "center",
    },
    logo: {
      fontFamily: "Bungee Inline",
    },
  }));
  const { toolbar, header, logo, mobileHeader } = useStyles();

  const AnthonyDininoLogo = (
    <Typography className={logo} variant="h6" component="h1">
      Anthony Dinino
    </Typography>
  );
  const displayDesktop = () => {
    return (
      <AppBar className={header}>
        <Toolbar className={toolbar}>{AnthonyDininoLogo}</Toolbar>
      </AppBar>
    );
  };
  const displayMobile = () => {
    return (
      <AppBar className={`${header} ${mobileHeader}`}>
        <Toolbar>{AnthonyDininoLogo}</Toolbar>
      </AppBar>
    );
  };
  return (
    <>
      <nav>{isMobileView ? displayMobile() : displayDesktop()}</nav>
    </>
  );
};

export default Header;
