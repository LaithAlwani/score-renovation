import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {},
  form: {
    width: "50%",
    heigh: "100%",
    margin: " 4rem auto",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  field: {
    marginTop: 15,
    marginBottom: 15,
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
      Contact us:
      <form
        noValidate
        autoComplete="off"
        className={classes.form}
        onSubmit={handleSubmit}
        >
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <TextField
          onChange={(e) => setName(e.target.value)}
          className={classes.field}
          label="Name"
          variant="outlined"
          value={name}
          fullWidth
          required
          error={nameError}
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          className={classes.field}
          label="Email"
          variant="outlined"
          value={email}
          fullWidth
          required
          error={emailError}
        />
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
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
      </form>
    </div>
  );
}

export default Contact;
