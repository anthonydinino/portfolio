import { React, useState, useContext } from "react";
import {
  Box,
  Typography,
  makeStyles,
  TextField,
  Paper,
  Fab,
  CircularProgress,
} from "@material-ui/core";
import { MailOutline, Error, Check } from "@material-ui/icons";
import { AppContext } from "../App";

const Contact = () => {
  const { navBarHeight, footerHeight, isDesktop } = useContext(AppContext);
  const [emailStatus, setEmailStatus] = useState("idle");
  const useStyles = makeStyles((theme) => ({
    contact: {
      scrollSnapAlign: "start",
      scrollMarginTop: `${navBarHeight}px`,
      padding: `0 5vw ${footerHeight + 40}px 5vw`,
    },
    paper: {
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(3),
      margin: theme.spacing(3, 0),
      width: isDesktop ? "30em" : "85%",
    },
    form: {
      width: "100%",
      "& .MuiFormControl-root": {
        width: "100%",
        marginBottom: theme.spacing(2),
      },
    },
    buttonProgress: {
      color: theme.palette.primary,
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
    submitButton: {
      background:
        emailStatus === "error"
          ? "red"
          : emailStatus === "success"
          ? "green"
          : undefined,
      "&:hover": {
        background: emailStatus === "success" && "limegreen",
      },
    },
  }));

  const [formData, setFormData] = useState({ name: "", message: "" });
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nameFieldProps = {
    name: "name",
    value: formData.name,
    variant: "outlined",
    placeholder: "Name",
    onChange: handleChange,
  };
  const messageFieldProps = {
    name: "message",
    value: formData.message,
    variant: "outlined",
    multiline: true,
    rows: 8,
    placeholder: "Message",
    onChange: handleChange,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailStatus("loading");
    fetch(document.URL + "contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setEmailStatus("success");
        }, 2000);

        console.log(json);
        setTimeout(() => {
          setEmailStatus("idle");
        }, 5000);
      })
      .catch((error) => {
        setEmailStatus("error");
        setTimeout(() => {
          setEmailStatus("idle");
        }, 5000);
        console.log("didnt work");
        console.error(error);
      });
  };

  const EmailButton = () => {
    return (
      <Fab
        color="primary"
        className={classes.submitButton}
        variant="extended"
        type="submit"
        disabled={emailStatus === "loading"}
      >
        {emailStatus === "error" ? (
          <>
            <Error style={{ marginRight: "8px" }} />
            Error
          </>
        ) : emailStatus === "success" ? (
          <>
            <Check style={{ marginRight: "8px" }} />
            Email Sent
          </>
        ) : (
          <>
            <MailOutline style={{ marginRight: "8px" }} />
            {emailStatus === "loading" ? (
              <>
                Sending...
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              </>
            ) : (
              "Send Email"
            )}
          </>
        )}
      </Fab>
    );
  };

  const contactForm = (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField required {...nameFieldProps}></TextField>
        <TextField required {...messageFieldProps}></TextField>
        <EmailButton status={emailStatus} />
      </Box>
    </form>
  );
  return (
    <Box
      className={classes.contact}
      id={"contact"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography className={classes.header} variant={isDesktop ? "h2" : "h4"}>
        Contact
      </Typography>
      <Typography>
        Please fill in the form below to contact me. This will send me an email
        and I will get back to you ASAP.
      </Typography>
      <Paper className={classes.paper}>{contactForm}</Paper>
    </Box>
  );
};

export default Contact;
