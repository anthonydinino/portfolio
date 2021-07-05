import { React, useContext } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { AppContext } from "../App";

const Contact = () => {
  const useStyles = makeStyles({});
  const { header } = useStyles();
  const { navBarHeight, isDesktop } = useContext(AppContext);
  return (
    <main
      style={{
        marginTop: navBarHeight,
        height: `calc(100vh - ${navBarHeight})`,
      }}
    >
      <Box justifyContent="center" display="flex">
        <Typography className={header} variant={isDesktop ? "h2" : "h4"}>
          Contact
        </Typography>
      </Box>
    </main>
  );
};

export default Contact;
