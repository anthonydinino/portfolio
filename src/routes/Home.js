import React, { useContext } from "react";
import { makeStyles, Typography, Box, Button, Link } from "@material-ui/core";
import { AppContext } from "../App";

const Content = () => {
  const { isDesktop } = useContext(AppContext);
  const useStyles = makeStyles({
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
  const { header, subheader, button } = useStyles();

  return (
    <main>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{ height: "100vh" }}
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
        <Button className={button} href={"/about"}>
          Learn about me...
        </Button>
      </Box>
    </main>
  );
};

export default Content;
