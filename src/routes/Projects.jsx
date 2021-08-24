import { React, useContext } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { AppContext } from "../App";
import Project from "../components/Project";

const Contact = () => {
  const { isDesktop, navBarHeight } = useContext(AppContext);
  const useStyles = makeStyles((theme) => ({
    projects: {
      scrollMarginTop: `${navBarHeight}px`,
      scrollSnapAlign: "start",
      backgroundImage: "linear-gradient(180deg, #f2eb8c, #fffaea)",
      width: "100%",
      minHeight: "50vh",
      background: "red",
      padding: "20px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, 300px)",
    },
  }));

  const classes = useStyles();
  const projects = [
    {
      name: "AFL API",
      img: "afl-api",
      desc: "Fetching an AFL API representing data in a unique way",
    },
  ];
  return (
    <Box
      className={classes.projects}
      id={"projects"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography className={classes.header} variant={isDesktop ? "h2" : "h4"}>
        Projects
      </Typography>
      <div className={classes.grid}>
        {projects.map(({ name, img, desc }) => {
          return <Project key={img} name={name} img={img} desc={desc} />;
        })}
      </div>
    </Box>
  );
};

export default Contact;
