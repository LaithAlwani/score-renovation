import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  form:{
    width:"50%",
    heigh:"100%",
    margin:" 4rem auto",
    [theme.breakpoints.down("sm")]:{
      width:"95%",
      
    }
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
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

  const handleSubmit = e =>{
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setTitleError(false);
    setMessageError(false);

    if(!name){
      setNameError(true);
    }
    else if(!email){
      setEmailError(true);
    }
    else if(!title){
      setTitleError(true);
    }
    else if(!message){
      setMessageError(true);
    }
    else{
      console.log(`name ${name}
      email: ${email}
      title: ${title}
      message: ${message}`)
    }

  }

  useEffect(()=>{
    
  })
  
  return (
    <div className={classes.root} id="contact">
      Contact us:
      <form noValidate autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
        <TextField
        onChange={e => setName(e.target.value)}
          className={classes.field}
          label="Name"
          variant="outlined"
          fullWidth
          required
          error={nameError}
        />
        <TextField
        onChange={e => setEmail(e.target.value)}
          className={classes.field}
          label="Email"
          variant="outlined"
          fullWidth
          required
          error={emailError}
        />
        <TextField
        onChange={e => setTitle(e.target.value)}
          className={classes.field}
          label="Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
        onChange={e => setMessage(e.target.value)}
          className={classes.field}
          label="Message"
          variant="outlined"
          multiline={true}
          rows={5}
          fullWidth
          required
          error={messageError}
        />
        <Button type="submit" variant="contained" color="secondary" fullWidth>Submit</Button>
      </form>
    </div>
  );
}

export default Contact;
