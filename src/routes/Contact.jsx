import { React, useState, useContext } from "react";
import {
  Box,
  Typography,
  makeStyles,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";
import { AppContext } from "../App";

const Contact = () => {
  const { navBarHeight, footerHeight, isDesktop } = useContext(AppContext);
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(3),
      margin: theme.spacing(3),
      width: isDesktop ? "60%" : "100%",
    },
    form: {
      width: "100%",
      "& .MuiFormControl-root": {
        width: "100%",
        marginBottom: theme.spacing(2),
      },
    },
    submitButton: {
      width: "100%",
    },
  }));
  const [formData, setFormData] = useState({ name: "", message: "" });
  const { paper, form, submitButton, header } = useStyles();

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
    rows: 4,
    placeholder: "Message",
    onChange: handleChange,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/contact", {
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
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const contactForm = (
    <form className={form} onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField {...nameFieldProps}></TextField>
        <TextField {...messageFieldProps}></TextField>
        <Button className={submitButton} type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
  return (
    <main
      style={{
        margin: `${navBarHeight}px 5vw 0px 5vw`,
        minHeight: `calc(100vh - ${navBarHeight + footerHeight}px)`,
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography className={header} variant={isDesktop ? "h2" : "h4"}>
          Contact
        </Typography>
        <Typography>
          Please fill in the form below to contact me. This will send me an
          email and I will get back to you ASAP.
        </Typography>
        <Paper className={paper}>{contactForm}</Paper>
      </Box>
    </main>
  );
};

export default Contact;
