import React from 'react'
import {ReservationContainer,
LeftReservation,
RightReservation,
LeftContainer,
BorderLine,
FormContainer,
}from './ReservationElements';
const Reservation = () => {
    return (
        <>
           <ReservationContainer>
               <LeftReservation>
                   <LeftContainer>
<h2>Time Open</h2>
<h3 >Sun-Fri</h3><p>6:00 am-5:00pm</p>
          <h3>Sat</h3><p>10:00 am-3:00pm</p>
         <BorderLine/>
         <h4>Call us : +977 98457125687 </h4>
</LeftContainer>
               </LeftReservation>
               <RightReservation>
           <h1>Reservation</h1>
           <FormContainer>
      <form method="post" >      
<input type="text" name="name" required="true" placeholder="Enter your name"/><br/>
<input type="email" name="email" required="true"  placeholder="Enter your email"/><br/>
<input type="date" name="date" required="true"  placeholder="Enter your date"/><br/>
<input type="time" name="time" required="true"  placeholder="Enter your time"/><br/>
<input type="time" name="duration" required="true"  placeholder="Enter your duration"/><br/>
<input type="number" name="people"  placeholder="No of people"/><br/>
<input type="submit" value="Book Your Table"/>
</form>   
           </FormContainer>
               </RightReservation>
               </ReservationContainer> 
        </>
    )
}

export default Reservation
