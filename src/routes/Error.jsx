import React, { useContext } from "react";
import { Box, Typography, Button } from "@material-ui/core";
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
      <Box alignItems="center" display="flex" flexDirection="column">
        <Box mt={4}>
          <Typography variant={"h2"} align={"center"}>
            Error
          </Typography>
          <Typography align={"center"}>
            Oops this page doesn't exist...
          </Typography>
        </Box>
        <Button style={{ marginTop: "5vh" }} href="/">
          Return to Home...
        </Button>
      </Box>
    </main>
  );
};

export default Error;
