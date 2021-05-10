import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(235, 229, 219, 0.4);
  position: relative;
  width: 100%;
  padding: 1rem;
  height: 35vh;
  font-size: 1.05rem;
  .title {
    color: rgb(100, 100, 100);
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
   
  }
`;

export const LeftContainer = styled.div``;
export const ImageIcon = styled.img`
  height: 15vh;
  background-position: center;
`;
export const MiddleContainer = styled.div`
  .para {
    font-size: 1.25rem;
  }
`;
export const RightContainer = styled.div`

 
  font-size: 1.5rem;
`;
export const LinkContainer = styled.div`
text-align:center;
  a {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    color: #000;
    align-self: center;
  }
  a:hover {
    color: red;
  }
  
`;
export const FormContainer = styled.form`
  input[type="text"] {
    width: 15vw;
    height: 5vh;
    margin: 0.5rem;
  }
  input[type="submit"] {
    width: 9vw;
    height: 5vh;
    border: 0.05rem solid;
    border-radius:0.25rem ;
  }
  @media screen and (max-width: 768px) {
   
    input[type="text"] {
      width: 25vw;
    }
    input[type="submit"] {
      width: 15vw;
    }
  }

  @media screen and (max-width: 468px) {
    input[type="text"] {
      width: 35vw;
    }
    input[type="submit"] {
      width: 25vw;
    }
  }
`;
export const CopyRightSection = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0%;
 
  margin:0;
  font-size: 1rem;

  
`;
