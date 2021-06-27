import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";
import { AppContext } from "../App";
import { GitHub, Facebook, LinkedIn, Instagram } from "@material-ui/icons";

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
    icons: {
      width: "10%",
      display: "flex",
      justifyContent: "flex-end",
      "& > *": {
        margin: "0px 5px",
      },
      "& > a:hover": {
        color: "#A1CAC2",
      },
    },
    mobileHeader: {
      alignItems: "center",
    },
    logo: {
      fontFamily: "Bungee Inline",
    },
  }));
  const { icons, toolbar, header, logo, mobileHeader } = useStyles();

  const iconAttributes = {
    href: "#",
    rel: "noreferrer",
    target: "_blank",
    color: "inherit",
  };
  const displayIcons = (
    <div className={icons}>
      <Link {...iconAttributes} href={"https://www.instagram.com/adinino21/"}>
        <Instagram />
      </Link>
      <Link {...iconAttributes} href={"https://www.facebook.com/dinino/"}>
        <Facebook />
      </Link>
      <Link
        {...iconAttributes}
        href={"https://www.linkedin.com/in/anthony-dinino1/"}
      >
        <LinkedIn />
      </Link>
      <Link {...iconAttributes} href={"https://github.com/anthonydinino/"}>
        <GitHub />
      </Link>
    </div>
  );

  const AnthonyDininoLogo = (
    <Typography className={logo} variant="h6" component="h1">
      Anthony Dinino
    </Typography>
  );
  const displayDesktop = () => {
    return (
      <AppBar className={header}>
        <Toolbar className={toolbar}>
          {AnthonyDininoLogo}
          {displayIcons}
        </Toolbar>
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
