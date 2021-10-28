import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { makeStyles, Box, Paper, Typography } from "@material-ui/core";
import Tickbox from "../components/Tickbox";
import { GetApp } from "@material-ui/icons";

const About = () => {
  const { navBarHeight, footerHeight, isDesktop } = useContext(AppContext);
  const useStyles = makeStyles((theme) => ({
    about: {
      scrollSnapAlign: "start",
      scrollMarginTop: `${navBarHeight}px`,
      backgroundImage: "linear-gradient(180deg, #fff9a9, #f2eb8c)",
    },
    container: {
      width: isDesktop ? "80vw" : "90vw",
      minWidth: "",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    header: {
      borderRadius: "10px",
      margin: "20px",
      padding: "10px",
      minWidth: isDesktop ? "20rem" : "90%",
      minHeight: "300px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > a": {
        textDecoration: "none",
        fontFamily: "Work Sans",
        "& > div": {
          padding: "2px",
          display: "flex",
          alignItems: "center",
        },
      },
      "& figure": {
        display: "grid",
        placeItems: "center",
      },
      "& figcaption": {
        marginTop: "10px",
        textAlign: "center",
      },
      "& img": {
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "20rem",
        borderRadius: "50%",
      },
    },
    article: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "100%",
      "& section": {
        display: isDesktop ? "flex" : "block",
        alignItems: "center",
        height: "100%",
        padding: "20px",
        width: "100%",
        "& > div": {
          height: "40px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 5px",
          "& > svg": {
            margin: "5px",
            color: "limegreen",
          },
        },
      },
    },
    bio: {
      padding: "20px",
      textAlign: "center",
    },
    quote: {
      display: "grid",
      placeItems: "center",
      "& > p": {
        fontSize: isDesktop ? "2.5rem" : "1.5rem",
        textAlign: "center",
        "& em": {
          margin: "0 10px",
          fontFamily: "IM Fell Great Primer SC",
          color: "orange",
          fontSize: "4rem",
        },
      },
    },
    skill: {
      scrollSnapAlign: isDesktop ? undefined : "start",
      scrollMarginTop: `${navBarHeight + 20}px`,
      textAlign: "center",
      minWidth: isDesktop ? "15rem" : "90%",
      borderRadius: "10px",
      padding: "20px",
      minHeight: "200px",
      width: "400px",
      margin: "20px",
      flexGrow: "1",
      display: "flex",
      flexDirection: "column",
    },
    subheading: {
      height: "40px",
      backgroundColor: "hsl(203, 30%, 26%)",
      width: "100%",
      display: "grid",
      placeItems: "center",
      "& > p": {
        color: "white",
        textAlign: "center",
      },
    },
  }));
  const classes = useStyles();
  return (
    <Box
      id={"about"}
      className={classes.about}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      style={{ minHeight: `calc(100vh - ${footerHeight + navBarHeight}px)` }}
    >
      <div className={classes.container}>
        <Paper className={classes.header} elevation={5}>
          <Typography
            className={classes.title}
            variant={isDesktop ? "h2" : "h4"}
          >
            About Me
          </Typography>
          <Link to="/files/Anthony-Dinino.docx" target="_blank" download>
            <div>
              <GetApp />
              My Resume
            </div>
          </Link>
          <figure>
            <img
              src={process.env.PUBLIC_URL + "/assets/graduation.jpg"}
              alt="My Graduation"
            />
            <figcaption>
              <Typography variant="body2" color="textSecondary">
                B.Tech. Information and Technology at the University of South
                Australia
              </Typography>
            </figcaption>
          </figure>

          <article className={classes.article}>
            <section>
              <Tickbox word="Graduate"></Tickbox>
              <Tickbox word="Certified"></Tickbox>
              <Tickbox word="Experienced"></Tickbox>
              <Tickbox word="Hardworking"></Tickbox>
              <Tickbox word="Passionate"></Tickbox>
            </section>

            <div className={classes.bio}>
              <Typography>
                Starting IT in since highschool Anthony has made IT software
                development his passion. Since 2015, Anthony has pursued his
                passion, graduating with a Bachelor's of Information Technology
                and has experience as an IT project coordinator leading small
                teams of developers.
              </Typography>
              <br />
              <Typography>
                Anthony has always been focused on the task at hand and
                continues to pursue a professionalism in his IT career. Anthony
                is now focused on web development using the below technologies
                and frameworks.
              </Typography>
            </div>
          </article>
        </Paper>
        <Paper className={classes.skill}>
          <div className={classes.subheading}>
            <Typography>Front-end Development</Typography>
          </div>
          <Tickbox word="ReactJS" />
          <Tickbox word="JavaScript ES6" />
          <Tickbox word="HTML / CSS" />
        </Paper>
        <Paper className={classes.skill}>
          <div className={classes.subheading}>
            <Typography>Database Integration</Typography>
          </div>
          <Tickbox word="MongoDB" />
          <Tickbox word="PostgreSQL" />
          <Tickbox word="Entity Framework" />
        </Paper>
        <Paper className={classes.skill}>
          <div className={classes.subheading}>
            <Typography>Back-end Development</Typography>
          </div>
          <Tickbox word="NodeJS" />
          <Tickbox word="Express" />
          <Tickbox word="AWS cloud services" />
        </Paper>
      </div>
    </Box>
  );
};

export default About;
