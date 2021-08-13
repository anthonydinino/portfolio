import React, { useContext } from "react";
import { makeStyles, Typography, Box, Button, Link } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { AppContext } from "../App";

const Content = () => {
  const { isDesktop, footerHeight } = useContext(AppContext);
  const useStyles = makeStyles({
    home: {
      backgroundImage: "linear-gradient(180deg, #fffaea, #fff9a9)",
      scrollSnapAlign: "start",
    },
    header: {
      textTransform: "uppercase",
      fontFamily: "Castoro",
      letterSpacing: "1vw",
      fontWeight: "bold",
      animation: "$fadein 2s ease-out",
    },
    subheader: {
      marginTop: "1vh",
      textTransform: "uppercase",
      fontFamily: "Poiret One",
      letterSpacing: "0.6vw",
      fontWeight: "bold",
      animation: "$fadein 2s ease-out",
    },

    button: {
      opacity: 0,
      marginTop: "5vh",
      animation: "$fadein 1s ease-out 2s",
      animationFillMode: "forwards",
    },
    downArrow: {
      opacity: 0,
      position: "absolute",
      animation: "$fadein 1s ease-out 2s",
      animationFillMode: "forwards",
      bottom: `${footerHeight + 32}px`,
      cursor: "pointer",
    },

    "@keyframes fadein": {
      "0%": {
        opacity: 0,
        transform: "scale(0.9)",
      },
      "100%": {
        opacity: 1,
        transform: "scale(1)",
      },
    },
  });
  const { home, header, subheader, button, downArrow } = useStyles();

  return (
    <Box
      id={"home"}
      className={home}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      style={{ minHeight: `calc(100vh - ${footerHeight}px)` }}
    >
      <Box xs={11}>
        <Typography
          className={header}
          align={"center"}
          variant={isDesktop ? "h2" : "h4"}
          component={isDesktop ? "h2" : "h4"}
        >
          Hi, I'm Anthony
        </Typography>
        <Typography
          className={subheader}
          align={"center"}
          variant={isDesktop ? "h5" : "h6"}
          component={isDesktop ? "h5" : "h6"}
        >
          And I'm a Web Developer...
        </Typography>
      </Box>
      <Button className={button} href={"#about"}>
        Learn about me...
      </Button>
      <Link href={"#about"} className={downArrow}>
        <ExpandMore />
      </Link>
    </Box>
  );
};

export default Content;
