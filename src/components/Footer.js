import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Link,
  Box,
  Typography,
} from "@material-ui/core";
import {
  GitHub,
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
} from "@material-ui/icons";

const iconAttributes = {
  href: "#",
  rel: "noreferrer",
  target: "_blank",
  color: "inherit",
};

const Footer = () => {
  const styles = makeStyles({
    footer: {
      left: 0,
      right: 0,
      bottom: 0,
      width: "100vw",
      alignItems: "center",
    },
    icons: {
      "& > * > *": {
        transform: "scale(1.5)",
        margin: "8px 16px",
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
      <Link {...iconAttributes} href={"https://twitter.com/AnthonyDeenino"}>
        <Twitter />
      </Link>
      <Link
        {...iconAttributes}
        href={"https://www.linkedin.com/in/anthony-dinino1/"}
      >
        <LinkedIn />
      </Link>
      <Link {...iconAttributes} href={"https://github.com/anthonydinino/"}>
        <GitHub style={{ transform: "scale(1.3)" }} />
      </Link>
    </div>
  );

  return (
    <footer>
      <AppBar position={"static"} className={footer}>
        <Toolbar children={displayIcons}></Toolbar>
        <Box textAlign="center">
          <Typography>
            Anthony Dinino &reg; {new Date().getFullYear()}
          </Typography>
        </Box>
      </AppBar>
    </footer>
  );
};

export default Footer;
