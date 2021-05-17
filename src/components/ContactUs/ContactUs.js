import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ContactContainer,
  ContactImage,
  ContactForm,
  ContactFormContainer,
  VectorContactImage,
  LeftContact,
  BackContactImg
} from "./ContactElement";
import Logo from "../../assets/images/contactus.jpg";
import Vector from "../../assets/images/contact.jpg";
import logo from "../../assets/images/contactimage.jpg";

import {
  Paper,
  TextareaAutosize,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  formbtn: {
    display: "flex",
    flexDirection: "column",
    width: "40vw",
   
    "& > *": {
      margin: theme.spacing(1.5),
    },
    [theme.breakpoints.down("sm")]: {
      width: "30vw",
    },
    [theme.breakpoints.down("lg")]: {
      width: "40vw",
      height:"75vh",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
    },
  },
  sendbtn: {
    width: "20vw",
    padding: "1rem",
    textAlign: "center",

   
    [theme.breakpoints.down("sm")]: {
      width: "20vw",
      padding: "0.5rem",
    },

    [theme.breakpoints.down("xs")]: {
      width: "60vw",
    },
  },
}));

const ContactUs = () => {
   const classes = useStyles();
  return (
    <>
      <ContactContainer>
        <ContactImage src={Logo} />

        <ContactForm>
          <VectorContactImage src={Vector}/>
          
          <LeftContact> 

          <BackContactImg src={logo}/>
          </LeftContact>
         
          <ContactFormContainer>
           
          <h2>Get in touch</h2>
            <Grid xs={12} sm={12} md={12}>
            
              <Paper>
                
                <form className={classes.formbtn} noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    required
                    variant="outlined"
                    name="name"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    required
                    type="email"
                    variant="outlined"
                    name="email"
                  />

                  <TextField
                    id="outlined-basic"
                    label="Message"
                    required
                    type="email"
                    variant="outlined"
                    name="message"
                  />
                  <TextareaAutosize
                    aria-label="minimum height"
                    rowsMin={10}
                    placeholder="Leave Message Here"
                  />

                  <Button
                    className={classes.sendbtn}
                    variant="contained"
                    color="primary"
                    href="/contactus"
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Grid> 
          </ContactFormContainer>
         
        </ContactForm>
       
      </ContactContainer>
    </>
  );
};

export default ContactUs;
