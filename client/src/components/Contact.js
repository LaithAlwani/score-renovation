import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Alert from "@material-ui/core/Alert";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.25rem",
    position: "relative",
  },
  whatsaap: {
    color: "green",
  },
}));

function Contact() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setTitleError(false);
    setMessageError(false);

    if (!name) {
      setNameError(true);
    } else if (!email) {
      setEmailError(true);
    } else if (!title) {
      setTitleError(true);
    } else if (!message) {
      setMessageError(true);
    } else {
      setSuccess("Request Set");
      setName("");
      setEmail("");
      setTitle("");
      setMessage("");
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    }
  };

  useEffect(() => {});

  return (
    <div className={classes.root} id="contact">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { my: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4">Contact us:</Typography>
        <a href="https://wa.me/+16139817682" target="_blank" rel="noreferrer">
          <WhatsAppIcon className={classes.whatsaap} />
        </a>
        Email:​info@scorerenovation.com
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          value={name}
          fullWidth
          required
          error={nameError}
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          value={email}
          fullWidth
          required
          error={emailError}
        />
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          variant="outlined"
          value={title}
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setMessage(e.target.value)}
          className={classes.field}
          label="Message"
          variant="outlined"
          value={message}
          multiline={true}
          rows={5}
          fullWidth
          required
          error={messageError}
        />
        <Button type="submit" variant="contained" color="secondary" fullWidth>
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default Contact;
