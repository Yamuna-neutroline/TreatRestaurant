import styled from "styled-components";

export const ReservationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  z-index: 1;
  position: relative;
 
  margin: 4rem;
  height:70vh;
  @media screen and (max-width: 1085px) {
   height:100vh;
   
  }
 

  @media screen and (max-width: 915px) {
   flex-direction:column;
   height:180vh;
  width:auto;
   
  }
`;
export const LeftReservation = styled.div`
  background-color: #000;
  height: 70vh;
  width: 35vw;
  color: #fff;
  margin: 1rem;
  padding: 1rem;
 
  @media screen and (max-width: 1085px) {
   height:95vh;
   width:60vw;
  }
  @media screen and (max-width: 915px) {
    
   height:100vh;
   width:70vw;
  
  }
  @media screen and (max-width: 520px) {
    
    width:90vw;
    height:130vh;
   }
   
`;
export const LeftContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 0.5px dashed #fff;
  border-radius: 0.5px;
  border-width: 2px;
  height: 62vh;
 text-align:center;
 
  h2 {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    
  }
  h3 {
    font-size: 2rem;
    padding: 0.5rem;
    margin: 1rem;
  }
  h4 {
    font-size: 1rem;
    
  }
  @media screen and (max-width: 1085px) {
   height:80vh;
   

  }
  @media screen and (max-width: 960px) {
   height:86vh;
   h4 {
   margin-top:-1.5rem;
  }

  }
 

`;

export const BorderLine = styled.div`
  border: 1px solid green;
  margin: 2rem;
  
`;
export const RightReservation = styled.div`
height: 70vh;
margin:0.5rem;
h1 
{
  color:#666699;
  letter-spacing:0.05rem;
}
@media screen and (max-width: 1085px) {
   height:100vh;
  
  }
`;
export const FormContainer = styled.div`
display:flex;



`;
