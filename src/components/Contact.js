import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import emailjs from "emailjs-com";



function Contact() {
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
      emailjs.sendForm(serviceId, templateId, e.target, userId).then(
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
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.25rem",
        position: "relative",
        marginBottom:"-50px"
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { my: 1 },
          "@media (min-width:600px)":{width:"65%"}
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
          <WhatsAppIcon
            sx={{
              transform: "scale(1.3)",
              margin: "0.5rem",
              color: "black",
              color: "green",
            }}
          />
        </Link>
        <Link
          to={{ pathname: "mailto:info@scorerenovation.com" }}
          rel="noreferrer"
          target="_blank"
        >
          <MailOutlineIcon
            sx={{
              transform: "scale(1.3)",
              margin: "0.5rem",
              color: "black",
            }}
          />
        </Link>

        <Link
          to={{ pathname: "tel:6139817682" }}
          rel="noreferrer"
          target="_blank"
        >
          <CallIcon
            sx={{
              transform: "scale(1.3)",
              margin: "0.5rem",
              color: "black",
            }}
          />
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
    </Box>
  );
}

export default Contact;
