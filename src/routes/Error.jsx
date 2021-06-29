import React, { useContext } from "react";
import { Grid, Typography, Button, Link } from "@material-ui/core";
import { AppContext } from "../App";

const Error = () => {
  const { navBarHeight } = useContext(AppContext);
  return (
    <main
      style={{
        marginTop: navBarHeight,
        height: `calc(100vh - ${navBarHeight})`,
      }}
    >
      <Grid container justify={"center"} spacing={3}>
        <Grid item xs={12}>
          <Typography variant={"h2"} align={"center"}>
            Error
          </Typography>
          <Typography align={"center"}>
            Oops this page doesn't exist...
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth={true}>
            <Link underline="none" href="/">
              Return to Home
            </Link>
          </Button>
        </Grid>
      </Grid>
    </main>
  );
};

export default Error;
