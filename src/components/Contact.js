import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  InputLabel,
  TextField,
} from "@mui/material";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
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
          setSuccess("Request Sent");
          e.target.reset();
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
        marginTop: "8rem",
        marginBottom: "3rem",
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
        <Title
          text="CONTACT US"
          icon={<ContactSupportIcon fontSize="large" />}
        />

        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <InputLabel>
          <TextField
            label="Name"
            name="name"
            aria-label="name"
            variant="outlined"
            fullWidth
            required
            error={nameError}
          />
        </InputLabel>
        <InputLabel>
          <TextField
            // onChange={(e) => setEmail(e.target.value)}
            label="Email"
            name="email"
            aria-label="email"
            variant="outlined"
            fullWidth
            required
            error={emailError}
          />
        </InputLabel>
        <InputLabel>
          <TextField
            // onChange={(e) => setTitle(e.target.value)}
            label="Subject"
            name="subject"
            aria-label="subject"
            variant="outlined"
            fullWidth
            required
            error={subjectError}
          />
        </InputLabel>
        <InputLabel>
          <TextField
            // onChange={(e) => setMessage(e.target.value)}
            label="Message"
            name="message"
            aria-label="message"
            variant="outlined"
            multiline={true}
            rows={5}
            fullWidth
            required
            error={messageError}
          />
        </InputLabel>

        <Button
          type="submit"
          aria-label="submit"
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#5b5b5b",
            "&:hover": { backgroundColor: "#444444" },
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
