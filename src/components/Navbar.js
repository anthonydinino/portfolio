import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Box,
  Link,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { AppContext } from "../App";

const Header = () => {
  const { isDesktop, navBarHeight } = useContext(AppContext);
  const useStyles = makeStyles(() => ({
    header: {
      minHeight: navBarHeight,
    },
    mobileHeader: {
      alignItems: "start",
    },
    toolbar: {
      justifyContent: "space-between",
      variant: "dense",
      padding: "0px 10vw",
    },
    logo: {
      fontFamily: "Bungee Inline",
    },
    menuButtons: {
      padding: `2vh 2vw`,
      fontFamily: "Open Sans",
      fontWeight: "normal",
    },
    menuIcon: {
      marginRight: "4vw",
    },
  }));
  const { menuButtons, menuIcon, toolbar, header, logo, mobileHeader } =
    useStyles();

  const AnthonyDininoLogo = (
    <Typography className={logo} variant="h6" align="left">
      <Link href="/" underline="none">
        Anthony Dinino
      </Link>
    </Typography>
  );

  const menuLinks = [
    { label: "About Me", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];
  const getMenuLinks = () => {
    return menuLinks.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            href: href,
            variant: "text",
            className: menuButtons,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const displayDesktop = () => {
    return (
      <AppBar className={header}>
        <Toolbar className={toolbar}>
          {AnthonyDininoLogo}
          <Box>{getMenuLinks()}</Box>
        </Toolbar>
      </AppBar>
    );
  };
  const displayMobile = () => {
    return (
      <AppBar className={`${header} ${mobileHeader}`}>
        <Toolbar>
          <Menu className={menuIcon} />
          {AnthonyDininoLogo}
        </Toolbar>
      </AppBar>
    );
  };
  return (
    <>
      <nav>{isDesktop ? displayDesktop() : displayMobile()}</nav>
    </>
  );
};

export default Header;
