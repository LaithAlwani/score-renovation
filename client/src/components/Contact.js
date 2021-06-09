import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Alert from "@material-ui/core/Alert";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from "@material-ui/icons/Call";

import emailjs from "emailjs-com";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.25rem",
    position: "relative",
  },
  icons: {
    transform: "scale(1.3)",
    margin: "0.5rem",
    color:"black"
  },
  whatsapp: {
    color: "green",
  },
}));

function Contact() {
  const classes = useStyles();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const userId = process.env.REACT_APP_USER_ID;
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setSubjectError(false);
    setMessageError(false);

    if (
      e.target.name.value &&
      e.target.email.value &&
      e.target.subject.value &&
      e.target.message.value
    ) {
      emailjs
        .sendForm(
          serviceId,
          templateId,
          e.target,
          userId
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess("Request Set");
            setTimeout(() => {
              setSuccess("");
            }, 3000);
          },
          (error) => {
            console.log(error.text);
            setError("Request Failed");
            setTimeout(() => {
              setError("");
            }, 3000);
          }
        );

      e.target.reset();
    } else {
      if (!e.target.name.value) {
        setNameError(true);
      }
      if (!e.target.email.value) {
        setEmailError(true);
      }
      if (!e.target.subject.value) {
        setSubjectError(true);
      }
      if (!e.target.message.value) {
        setMessageError(true);
      }
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
        <Link
          to={{ pathname: "https://wa.me/+16139817682" }}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon className={`${classes.icons} ${classes.whatsapp}`} />
        </Link>
        <Link
          to={{ pathname: "mailto:info@scorerenovation.com" }}
          rel="noreferrer"
          target="_blank"
        >
          <MailOutlineIcon className={classes.icons} />
        </Link>

        <Link 
        to={{ pathname: "tel:6139817682" }}
          rel="noreferrer"
          target="_blank"
        >
          <CallIcon className={classes.icons} />
        </Link>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          required
          error={nameError}
        />
        <TextField
          // onChange={(e) => setEmail(e.target.value)}
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          required
          error={emailError}
        />
        <TextField
          // onChange={(e) => setTitle(e.target.value)}
          label="Subject"
          name="subject"
          variant="outlined"
          fullWidth
          required
          error={subjectError}
        />
        <TextField
          // onChange={(e) => setMessage(e.target.value)}
          className={classes.field}
          label="Message"
          name="message"
          variant="outlined"
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
