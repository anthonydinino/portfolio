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
    },
    subheader: {
      textTransform: "uppercase",
      fontFamily: "Poiret One",
      letterSpacing: "0.6vw",
      fontWeight: "bold",
    },
    grid: {
      height: "100vh",
      "& > *": {},
    },
  });
  const { grid, header, subheader } = useStyles();

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
        variant="h4"
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
        className={grid}
      >
        <Grid item xs={10} sm={10}>
          {isMobileView ? mobileTextHeader : desktopTextHeader}
        </Grid>
      </Grid>
    </main>
  );
};

export default Content;
