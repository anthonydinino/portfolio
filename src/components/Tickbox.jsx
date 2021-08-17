import React from "react";
import { CheckCircle } from "@material-ui/icons";
import { Typography, makeStyles } from "@material-ui/core";

const Tickbox = (props) => {
  const useStyles = makeStyles((theme) => ({
    tickbox: {
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 5px",
      "& > svg": {
        margin: "5px",
        color: "limegreen",
      },
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.tickbox}>
      <CheckCircle />
      <Typography>{props.word}</Typography>
    </div>
  );
};

export default Tickbox;
