import styled from "styled-components";

export const ReservationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  z-index: 1;
  position: sticky;
  background-color: khaki;
  font-family: "Times New Roman", Times, serif;
  @media screen and (max-width: 880px) {
    flex-direction: column;
    height: 150vh;
  }
`;
export const LeftReservation = styled.div`
  background-color: #101522;
  height: 50vh;
  width: 30vw;
  color: #fff;
  margin: 1rem;
  padding: 1rem;
  @media screen and (max-width: 1085px) {
    height: 75vh;
    width:50vw;
  }
  @media screen and (max-width: 880px) {
    width: 80vw;
    margin-top: 1rem;
  }
  @media screen and (max-width: 450px) {
    width: 90vw;
    height:75vh;
    font-size:1rem;
  }
`;
export const LeftContainer = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  border: 0.5px dashed #fff;
  border-radius: 0.5px;
  border-width: 2px;
  height: 45vh;
  @media screen and (max-width: 1085px) {
    height: 68vh;

    font-size: 1rem;
   
  }
  @media screen and (max-width: 480px) {
    height: 65vh;
    
   
  }
  h2 {
    font-size: 2rem;
    margin: 0.5rem;
    padding: 0.5rem;
  }
  h3 {
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  h4 {
    font-size: 1.5rem;
  }
`;

export const BorderLine = styled.div`
  border: 0.5px solid green;
  margin: 1rem;
 
`;
export const RightReservation = styled.div`
  height: 50vh;
  width: 40vw;
  text-align: center;
  @media screen and (max-width: 1085px) {
    height: 70vh;
  }
  h1 {
    color: blue;
    margin-bottom: 1rem;
  }
`;
export const FormContainer = styled.div`
  input {
    width: 20vw;
    height: 5vh;
    margin: 0.25rem;
    padding: 1rem;
  }
  input[type="submit"] {
    width: 18vw;
    background-color: #101522;
    color: white;
    font-size: 1rem;

    border-radius: 20px;
    text-align: center;
    height: 6vh;
  }
  @media screen and (max-width: 1085px) {
    
    input {
      width: 40vw;
    }

    input[type="submit"] {
      width: 30vw;
      
      height: 6vh;
    }
  }

  @media screen and (max-width: 450px) {
    
    input {
      width: 60vw;
      
    }

    input[type="submit"] {
      width: 55vw;
      height: 7vh;
      
    }
  }
`;
