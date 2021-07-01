import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Link,
  Box,
  Typography,
} from "@material-ui/core";
import { GitHub, Facebook, LinkedIn, Instagram } from "@material-ui/icons";

const iconAttributes = {
  href: "#",
  rel: "noreferrer",
  target: "_blank",
  color: "inherit",
};

const Footer = () => {
  const styles = makeStyles({
    footer: {
      alignItems: "center",
    },
    icons: {
      "& > *": {
        margin: "0px 5px",
      },
      "& > a:hover": {
        color: "#A1CAC2",
      },
    },
  });
  const { footer, icons } = styles();
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

  return (
    <footer>
      <AppBar position={"static"} className={footer}>
        <Toolbar children={displayIcons}></Toolbar>
        <Box textAlign="center" pt={{ xs: 2 }} pb={{ xs: 2 }}>
          <Typography>
            Anthony Dinino &reg; {new Date().getFullYear()}
          </Typography>
        </Box>
      </AppBar>
    </footer>
  );
};

export default Footer;
