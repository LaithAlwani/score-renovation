import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Box, Button, Container, TextField } from "@mui/material";

import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Title from "./Title";
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
    <Container
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        
        marginBottom: "-50px",
        backgroundColor:"white"
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { my: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Title text="CONTACT US" icon={<ContactSupportIcon fontSize="large" />} />

        
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
        <Button type="submit" variant="contained"  sx={{width:"100%", backgroundColor:"black"}}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
