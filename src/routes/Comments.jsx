import { useContext, React } from "react";
import { AppContext } from "../App";
import { makeStyles, Box, Paper, Typography } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";

const Comments = () => {
  const { navBarHeight, footerHeight, isDesktop } = useContext(AppContext);
  const useStyles = makeStyles((theme) => ({
    comments: {
      scrollSnapAlign: "start",
      scrollMarginTop: `${navBarHeight}px`,
      backgroundImage: "linear-gradient(180deg,#efefef, #fffaea)",
    },
    comment: {
      padding: theme.spacing(2),
      "& > .commentHeader": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      "& > .commentText": {
        marginTop: theme.spacing(2),
      },
      "& > .commentFooter": {
        color: "grey",
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing(2),
        "& svg": {
          marginRight: theme.spacing(1),
        },
      },
    },
  }));
  const classes = useStyles();
  var comments = [
    {
      name: "Anthony",
      comment: "Nice website",
      likes: 5,
      time: new Date().toDateString(),
    },
  ];
  return (
    <Box
      id={"comments"}
      className={classes.comments}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      style={{ minHeight: `calc(100vh - ${footerHeight + navBarHeight}px)` }}
    >
      <div className={classes.container}>
        <Typography variant={"h4"}>Share a Comment Below</Typography>
        {comments.map(({ name, comment, likes, time }) => {
          return (
            <Paper className={classes.comment}>
              <div className={"commentHeader"}>
                <Typography variant={"h6"}>{name}</Typography>
                <Typography>{time}</Typography>
              </div>
              <div className={"commentText"}>
                <Typography>{comment}</Typography>
              </div>
              <div className={"commentFooter"}>
                <ThumbUp />
                <Typography>{likes}</Typography>
              </div>
            </Paper>
          );
        })}
      </div>
    </Box>
  );
};

export default Comments;
