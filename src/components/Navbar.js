import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Box,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";
import { AppContext } from "../App";

const Header = () => {
  const { isDesktop, navBarHeight } = useContext(AppContext);
  const [drawerState, setState] = useState(false);
  const useStyles = makeStyles(() => ({
    header: {
      minHeight: navBarHeight,
      left: 0,
      right: 0,
      top: 0,
      width: "100vw",
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
    { label: "Home", href: "/" },
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

  const getDrawerLinks = () => {
    return (
      <List>
        <ListItem button divider>
          <Close onClick={() => setState(!drawerState)} />
        </ListItem>
        {menuLinks.map(({ label, href }) => {
          return (
            <ListItem
              {...{ button: true, component: "a", key: label, href: href }}
              onClick={() => setState(!drawerState)}
            >
              <ListItemText>{label}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    );
  };

  const displayMobile = () => {
    return (
      <AppBar className={`${header} ${mobileHeader}`}>
        <Drawer open={drawerState} variant="temporary" anchor="top">
          {getDrawerLinks()}
        </Drawer>
        <Toolbar>
          <Menu className={menuIcon} onClick={() => setState(!drawerState)} />
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
