import React from "react";
import { makeStyles } from "@material-ui/core";

const Content = () => {
  const useStyles = makeStyles({});
  return (
    <main>
      <h1>Hello</h1>
      <div style={{ height: "800px", width: "400px", background: "red" }}></div>
    </main>
  );
};

export default Content;
