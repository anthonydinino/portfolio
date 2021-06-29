import React from "react";
import { AppBar, Toolbar, makeStyles, Link } from "@material-ui/core";
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
      display: "flexbox",
      justifyContent: "flex-end",
      bottom: "0",
      background: "#2F4858",
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
        <Toolbar>{displayIcons}</Toolbar>
      </AppBar>
    </footer>
  );
};

export default Footer;
