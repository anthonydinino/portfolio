import { React, useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import { AppContext } from "../App";

const About = () => {
  const { navBarHeight, isDesktop } = useContext(AppContext);
  const useStyles = makeStyles({
    image: {
      borderRadius: "50px",
      width: isDesktop ? "50%" : "100%",
      minHeight: "20rem",
      maxHeight: "10rem",
    },
    imageIcon: {
      objectFit: "contain",
      height: "15rem",
      maxWidth: "90%",
    },
  });
  const { image, imageIcon } = useStyles();
  const qualifications = (
    <>
      <Grid item xs={12} sm={6}>
        <Grid container justify="center">
          <CardMedia
            component="img"
            className={image}
            image={`${process.env.PUBLIC_URL}/assets/graduation.jpg`}
            title="Anthony graduating from UniSA"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="primary"
              component="p"
              align="justify"
            >
              Graduating with a Bachelor of Information Technology at the
              University of South Australia
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography
          variant={isDesktop ? "h4" : "h6"}
          style={{ margin: "0 0 1ch 0" }}
        >
          Qualifications
        </Typography>
        <Typography>
          Anthony is a Web Developer and graduate from the University of South
          Australia. Graduating with a Bachelor of Information Technology in
          2019 and achieving a High Distinction in Web Development. He loves
          learning new cutting edge web frameworks easily adapting to new
          technologies. <br /> <br /> With years of experience coordinating
          large projects and developing robust websites, his background in
          information technology, web development, and project management inform
          his mindful but competitive approach.
          <br /> <br /> Anthony is forever learning something new, eager to both
          build on his academic foundations in web development and stay in tune
          with the latest coding practices through continued coursework and
          professional development.
        </Typography>
      </Grid>
    </>
  );
  const experience = (
    <>
      <Grid item xs={12} sm={6}>
        <Typography
          variant={isDesktop ? "h4" : "h6"}
          style={{ margin: "0 0 1ch 0" }}
        >
          Experience
        </Typography>
        <Typography>
          After graduating from UniSA, Anthony was eager to utilize his newly
          aquired skills and add some value into the real-world. He eventually
          was offered a job in 2020 as a project coordinator in a company called
          2Excel
          <br /> <br />
          Anthony's responsibility of this job was to deliver client projects
          starting from the brainstorming phase all the way until delivery and
          maintainence. He was responsible for the scoping document which
          outlined all requirements, risks and technologies used aswell as
          designing all the barebones UI using UXPin.
          <br /> <br /> His last responsibility was to relay that information to
          a team of developers whilst also ensuring the project is on track and
          can be delivered on time using Microsoft DevOps, testing for bugs
          along the way.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container justify="center">
          <CardMedia
            component="img"
            className={image}
            image={`${process.env.PUBLIC_URL}/assets/experience.png`}
            title="Anthony Dinino on the job at 2Excel with fellow co-worker Alexander Selman"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="primary"
              component="p"
              align="justify"
            >
              Anthony Dinino on the job at 2Excel with fellow co-worker
              Alexander Selman
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
  const whatnow = (
    <>
      <Grid item xs={12} sm={6}>
        <Typography
          variant={isDesktop ? "h4" : "h6"}
          align="center"
          style={{ margin: "0 0 1ch 0" }}
        >
          Where to now?
        </Typography>
        <Typography align="center">
          With experience in the IT industry since 2015 and a Bachelor's Degree
          in Information Technology, Anthony is taking a proactive approach to
          helping businesses independently. Anthony is constantly learning the
          most practical and cutting edge technologies to help deliver the most
          future-proof yet functional solution. Anthony has worked with
          technologies used for front-end development as well as back-end
          development.
        </Typography>
        <Typography
          variant={isDesktop ? "h6" : "h6"}
          align="center"
          style={{ margin: "2ch 0" }}
        >
          Technologies Learnt
        </Typography>
      </Grid>
    </>
  );

  const technologyList = [
    { src: "mongodb.png", desc: "Mongo DB" },
    {
      src: "express.png",
      desc: "Express.js",
    },
    {
      src: "react.png",
      desc: "React.js",
    },
    {
      src: "node.png",
      desc: "Node.js",
    },
    {
      src: "materialui.png",
      desc: "Material UI Framework",
    },
    {
      src: "html.png",
      desc: "Hypertext Markup Language",
    },
    {
      src: "javascript.png",
      desc: "Javascript ES6",
    },
    {
      src: "css.png",
      desc: "Cascading Style Sheets",
    },
  ];

  const getTechs = () => {
    return technologyList.map(({ src, desc }) => {
      return (
        <Grid item key={desc} xs={6} sm={3}>
          <Box
            display="flex"
            flexDirection="column"
            style={{ height: "20rem" }}
            alignItems="center"
          >
            <img
              className={imageIcon}
              src={`${process.env.PUBLIC_URL}/assets/technologies/${src}`}
              alt={desc}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="primary"
                component="p"
                align="center"
              >
                {desc}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      );
    });
  };
  const technologies = <Grid container>{getTechs()}</Grid>;
  return (
    <main
      style={{
        minHeight: `calc(100vh - ${navBarHeight}px)`,
        margin: `${navBarHeight}px 5vw 0 5vw`,
      }}
    >
      <Box alignItems="center" display="flex" flexDirection="column">
        <Typography variant={isDesktop ? "h2" : "h4"}>
          Who is Anthony?
        </Typography>
        <Grid container spacing={3} justify="center">
          {qualifications}
          {experience}
          {whatnow}
          {technologies}
        </Grid>
      </Box>
    </main>
  );
};

export default About;
