import React, { useContext } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { AppContext } from "../App";

const Error = () => {
  const { navBarHeight, footerHeight } = useContext(AppContext);
  return (
    <main
      style={{
        marginTop: `${navBarHeight}px`,
        height: `calc(100vh - ${navBarHeight + footerHeight}px)`,
      }}
    >
      <Box alignItems="center" display="flex" flexDirection="column">
        <Box>
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
