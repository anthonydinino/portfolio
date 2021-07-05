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
    grid: {},
    image: {
      borderRadius: "8px",
      width: isDesktop ? "70%" : "100%",
      minHeight: "20rem",
    },
  });
  const { image, grid } = useStyles();
  return (
    <main
      style={{
        minHeight: `calc(100vh - ${navBarHeight})`,
        margin: `${navBarHeight} 5vw 0 5vw`,
      }}
    >
      <Box alignItems="center" display="flex" flexDirection="column">
        <Typography variant={isDesktop ? "h2" : "h4"}>
          Who is Anthony?
        </Typography>
        <Grid
          container
          spacing={3}
          className={grid}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Typography
              variant={isDesktop ? "h4" : "h6"}
              style={{ margin: "0 0 1ch 0" }}
            >
              Qualifications
            </Typography>
            <Typography>
              Anthony is a Web Developer and graduate from the University of
              South Australia. Graduating with a Bachelor of Information
              Technology in 2019. He loves learning new web frameworks and
              easily adapts to new technologies. <br /> <br /> With years of
              experience coordinating large projects and developing robust
              websites, his background in information technology, web
              development, and project management inform his mindful but
              competitive approach.
              <br /> <br /> Anthony is fueled by his passion for understanding
              the nuances of computer science and web development. He is forever
              learning something new, eager to both build on his academic
              foundations in web development and programming and stay in tune
              with the latest coding practices through continued coursework and
              professional development.
            </Typography>
          </Grid>
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
        </Grid>
      </Box>
    </main>
  );
};

export default About;
