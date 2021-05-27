import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button} from '@material-ui/core';
import {
  ReservationContainer,
  LeftReservation,
  RightReservation,
  LeftContainer,
  BorderLine,
  
} from "./ReservationElements";
const useStyles = makeStyles((theme) => ({
    container: 
    {
display:'flex',
flexDirection:'column',

'&>*':{
margin:theme.spacing(1),
width:'35vw',
[theme.breakpoints.down("lg")]: {
    width: "40vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50vw",
  },
  
  [theme.breakpoints.down("xs")]: {
    width: "60vw",
  },
  
},

    },
   
    btn: {
        width:'15vw',
        padding:'1rem',
       
        [theme.breakpoints.down("sm")]: {
          width: "30vw",
        }, 
        [theme.breakpoints.down("xs")]: {
          width: "40vw",
          padding:'0.5rem',
        }, 
    }
  }));
const Reservation = () => {
    const classes = useStyles();
  return (
    <>
      <ReservationContainer>
        <LeftReservation>
          <LeftContainer>
            <h2>Time Open</h2>
            <h3>Sun-Fri</h3>
            <p>6:00 am-5:00pm</p>
            <h3>Sat</h3>
            <p>10:00 am-3:00pm</p>
            <BorderLine />
            <h4>Call us : +977 98457125687 </h4>
          </LeftContainer>
        </LeftReservation>
        <RightReservation>
          <h1>Reservation</h1>
          
          <form className={classes.container}  noValidate autoComplete="off">
     <TextField id="standard-basic" label="Enter your name" />
     <TextField id="standard-basic" label="Enter your email" />
     <TextField
   id="standard-basic"
   label="Date"
    type="date"
  />
  <TextField
    id="time"
    label="Time"
    type="time"
    />
    <TextField id="standard-basic"  label="No of people" type="number" />
    <Button variant="contained" color="primary" className={classes.btn}>
  Book Table
</Button>
</form>          
        </RightReservation>
      </ReservationContainer>
    </>
  );
};

export default Reservation;
