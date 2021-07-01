import React, { useContext } from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { AppContext } from "../App";

const Content = () => {
  const { isMobileView } = useContext(AppContext);
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

  const desktopTextHeader = (
    <>
      <Typography
        className={header}
        align={"center"}
        variant="h2"
        component="h1"
      >
        Hi, I'm Anthony
      </Typography>
      <Typography
        className={subheader}
        align={"center"}
        variant="h6"
        component="h1"
      >
        And I'm a Web Developer...
      </Typography>
    </>
  );

  const mobileTextHeader = (
    <>
      <Typography
        className={header}
        align={"center"}
        variant="h3"
        component="h1"
      >
        Hi, I'm Anthony
      </Typography>
      <Typography
        className={subheader}
        align={"center"}
        variant="h6"
        component="h1"
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
          {isMobileView ? mobileTextHeader : desktopTextHeader}
        </Grid>
      </Grid>
    </main>
  );
};

export default Content;
