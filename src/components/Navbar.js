import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { AppContext } from "../App";

const Header = () => {
  const { isDesktop, navBarHeight } = useContext(AppContext);
  console.log(isDesktop);
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#2F4858",
      minHeight: navBarHeight,
    },
    mobileHeader: {
      alignItems: "start",
    },
    toolbar: {
      justifyContent: "space-between",
      variant: "dense",
    },
    logo: {
      fontFamily: "Bungee Inline",
    },
    menu: {
      marginRight: "4vw",
    },
  }));
  const { menu, toolbar, header, logo, mobileHeader } = useStyles();

  const AnthonyDininoLogo = (
    <Typography className={logo} variant="h6" component="h1">
      Anthony Dinino
    </Typography>
  );

  const navLinks = (
    <>
      <Link href="/contact">Contact</Link>
    </>
  );
  const displayDesktop = () => {
    return (
      <AppBar className={header}>
        <Toolbar className={toolbar}>
          {AnthonyDininoLogo}
          {navLinks}
        </Toolbar>
      </AppBar>
    );
  };
  const displayMobile = () => {
    return (
      <AppBar className={`${header} ${mobileHeader}`}>
        <Toolbar>
          <Menu className={menu} />
          {AnthonyDininoLogo}
        </Toolbar>
      </AppBar>
    );
  };
  console.log(isDesktop);
  return (
    <>
      <nav>{isDesktop ? displayDesktop() : displayMobile()}</nav>
    </>
  );
};

export default Header;
