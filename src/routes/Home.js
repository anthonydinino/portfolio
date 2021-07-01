import React, { useContext } from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { AppContext } from "../App";

const Content = () => {
  const { isDesktop } = useContext(AppContext);
  const useStyles = makeStyles({
    header: {
      textTransform: "uppercase",
      fontFamily: "Castoro",
      letterSpacing: "1vw",
      fontWeight: "bold",
      animation: "$enlarge 5s",
    },

    subheader: {
      marginTop: "1vh",
      textTransform: "uppercase",
      fontFamily: "Poiret One",
      letterSpacing: "0.6vw",
      fontWeight: "bold",
      animation: "$enlarge 5s",
    },

    "@keyframes enlarge": {
      "0%": {
        opacity: 0.1,
        transform: "scale(0.9)",
      },
      "100%": {
        opacity: 1,
        transform: "scale(1)",
      },
    },
  });
  const { header, subheader } = useStyles();

  const textHeader = (
    <>
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
        variant={isDesktop ? "h4" : "h6"}
        component={isDesktop ? "h4" : "h6"}
      >
        And I'm a Web Developer...
      </Typography>
    </>
  );

  return (
    <main>
      <Grid
        container
        justify={"center"}
        alignContent={"center"}
        style={{ height: "100vh" }}
      >
        <Grid item xs={11}>
          {textHeader}
        </Grid>
      </Grid>
    </main>
  );
};

export default Content;
