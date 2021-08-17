import { React, useContext } from "react";
import { makeStyles, Link } from "@material-ui/core";
import {
  GitHub,
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
} from "@material-ui/icons";
import { AppContext } from "../App";

const iconAttributes = {
  href: "#",
  rel: "noreferrer",
  target: "_blank",
  color: "inherit",
};

const Footer = () => {
  const { footerHeight } = useContext(AppContext);
  const styles = makeStyles((theme) => ({
    footer: {
      "& > *": {
        color: "white",
      },
      maxHeight: `${footerHeight}px`,
      position: "fixed",
      bottom: "0px",
      left: "0px",
      right: "0px",
      backgroundImage: `linear-gradient(to top, hsl(203, 30%, 22%), hsl(203, 20%, 27%))`,
      display: "grid",
      placeItems: "center",
      padding: "8px 0",
    },
    icons: {
      "& > * > svg": {
        transform: "scale(1.5)",
        margin: "8px 16px",
      },
      "& > * > svg:hover": {
        color: "#A1CAC2",
      },
    },
  }));
  const classes = styles();
  const displayIcons = (
    <div className={classes.icons}>
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

  return <footer className={classes.footer}>{displayIcons}</footer>;
};

export default Footer;
