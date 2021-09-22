import { useContext, useEffect, useState, React } from "react";
import { AppContext } from "../App";
import {
  makeStyles,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";

const Comments = () => {
  const { navBarHeight, footerHeight, isDesktop } = useContext(AppContext);
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      width: isDesktop ? "40em" : "85%",
    },
    commentForm: {
      width: "100%",
      "& > *:not(*:nth-last-child(1))": {
        margin: "0.5rem 0",
      },
      "& > *:nth-last-child(1)": {
        margin: "1.5rem 0",
      },
    },
    comments: {
      scrollSnapAlign: "start",
      scrollMarginTop: `${navBarHeight}px`,
      backgroundImage: "linear-gradient(180deg,#efefef, #fffaea)",
      paddingBottom: `${footerHeight}px`,
    },
    comment: {
      textAlign: "left",
      width: "100%",
      margin: "0 0 16px 0",
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
        "& svg:hover": {
          cursor: "pointer",
          color: theme.palette.primary.main,
        },
      },
    },
  }));
  const classes = useStyles();

  const [isCommentPosted, setIsCommentPosted] = useState(false);
  const [comments, setComments] = useState();
  const [formData, setFormData] = useState({ name: "", comment: "" });

  useEffect(() => {
    refreshComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchComments = async () => {
    const data = await fetch(document.URL.split("#")[0] + "api/comments");
    const result = await data.json();
    return result;
  };

  const refreshComments = () => {
    fetchComments()
      .then((data) => {
        setComments(data);
      })
      .catch((err) => console.error(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(document.URL.split("#")[0] + "api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        comment: formData.comment,
      }),
    })
      .then((response) => {
        console.log(response);
        setIsCommentPosted(true);
        setFormData({ name: "", comment: "" });
        refreshComments();
      })
      .catch((err) => console.error(err.message));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLike = (_id) => {
    fetch(document.URL.split("#")[0] + `api/comments/${_id}`, {
      method: "PUT",
    })
      .then((response) => {
        refreshComments();
      })
      .catch((err) => console.error(err.message));
  };

  let form;
  if (isCommentPosted) {
    form = (
      <Typography gutterBottom style={{ color: "green" }}>
        Thanks for your feedback!
      </Typography>
    );
  } else {
    form = (
      <form className={classes.commentForm} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Comment"
          name="comment"
          value={formData.comment}
          multiline
          maxRows={4}
          onChange={handleChange}
          required
        />
        <Button fullWidth type="submit">
          Post Comment
        </Button>
      </form>
    );
  }

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
        {form}
        {comments &&
          comments.map(({ name, comment, timestamp, likes, _id }) => {
            const date = new Date(timestamp).toDateString();
            return (
              <Paper className={classes.comment}>
                <div className={"commentHeader"}>
                  <Typography variant={"h6"}>{name}</Typography>
                  <Typography>{date}</Typography>
                </div>
                <div className={"commentText"}>
                  <Typography>{comment}</Typography>
                </div>
                <div className={"commentFooter"}>
                  <ThumbUp cursor onClick={() => handleLike(_id)} />
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
