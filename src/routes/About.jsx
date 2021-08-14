import { React, useContext } from "react";
import { AppContext } from "../App";
import { makeStyles, Box, Paper, Typography } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";

const About = () => {
  const { navBarHeight, footerHeight, isDesktop } = useContext(AppContext);
  const useStyles = makeStyles((theme) => ({
    about: {
      scrollSnapAlign: "start",
      scrollMarginTop: `${navBarHeight}px`,
      backgroundImage: "linear-gradient(180deg, #fff9a9, #fcfaec)",
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
        flexGrow: "1",
        display: "grid",
        gap: "30px",
        placeItems: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(10em,1fr))",
        height: "100%",
        padding: "20px",
        width: "100%",
        boxSizing: "border-box",
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
      minWidth: isDesktop ? "15rem" : "90%",
      borderRadius: "10px",
      padding: "20px",
      minHeight: "200px",
      width: "400px",
      margin: "20px",
      flexGrow: "1",
      display: "flex",
      flexDirection: "column",
      "& > div": {
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
          <figure>
            <img
              src={process.env.PUBLIC_URL + "/assets/graduation.jpg"}
              alt="My Graduation"
            />
            <figcaption>
              <Typography variant="body2" color="textSecondary">
                Anthony on his graduation day at the University of South
                Australia
              </Typography>
            </figcaption>
          </figure>

          <article className={classes.article}>
            <section>
              <div>
                <CheckCircle />
                <Typography>Graduate</Typography>
              </div>
              <div>
                <CheckCircle />
                <Typography>Certified</Typography>
              </div>
              <div>
                <CheckCircle />
                <Typography>Experienced</Typography>
              </div>
              <div>
                <CheckCircle />
                <Typography>Hardworking</Typography>
              </div>
              <div>
                <CheckCircle />
                <Typography>Passionate</Typography>
              </div>
            </section>
            <div className={classes.quote}>
              <Typography>
                <code>
                  <em>"</em>Show me the code!
                  <em>"</em>
                </code>
              </Typography>
            </div>
            <div className={classes.bio}>
              <Typography>
                Since Anthony was very young, he has always had a keen eye for
                technology and solving problems. <em>"It keeps me busy"</em> is
                what Anthony would say. However, what seems like an innocent
                hobby can transcend into something much more than just a mere
                mind distraction. A career perhaps?
              </Typography>
              <br />
              <Typography>
                Since 2015, Anthony has pursued his passion, graduating with a
                Bachelor's of Information Technology and working full-time as a
                Project Coordinator Anthony has always been focused on the task
                at hand.
              </Typography>
            </div>
          </article>
        </Paper>
        <Paper className={classes.skill}>
          <div>
            <Typography>Front-end Development</Typography>
          </div>
        </Paper>
        <Paper className={classes.skill}>
          <div>
            <Typography>Database Integration</Typography>
          </div>
        </Paper>
        <Paper className={classes.skill}>
          <div>
            <Typography>Back-end Development</Typography>
          </div>
        </Paper>
      </div>
    </Box>
  );
};

export default About;
