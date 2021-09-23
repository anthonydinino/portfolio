import React from "react";
import { makeStyles, Typography, Link } from "@material-ui/core";

const Project = ({ name, img, desc }) => {
  const imagePath = `/assets/projects/${img}.png`;

  const useStyles = makeStyles((theme) => ({
    project: {
      width: "100%",
      height: "400px",
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      cursor: "pointer",
    },
    img: {
      backgroundImage: `url(${process.env.PUBLIC_URL + imagePath})`,
      backgroundColor: "white",
      position: "absolute",
      filter: "blur(8px)",
      inset: "0px",
      transition: "filter 0.5s",
      "&:hover": {
        filter: "blur(3px)",
      },
    },
    name: {
      zIndex: "1",
      fontFamily: "Montserrat",
      textAlign: "center",
    },
    description: {
      zIndex: "1",
      textAlign: "center",
    },
  }));

  const classes = useStyles();
  return (
    <Link href={`/projects/${img}`} target={"_blank"}>
      <div className={classes.project}>
        <div className={classes.img}></div>
        <div className={classes.name}>
          <Typography>
            <b>{name}</b>
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography>{desc}</Typography>
        </div>
      </div>
    </Link>
  );
};

export default Project;
