import styled from "styled-components";

export const ContactContainer = styled.div`
  width: auto;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;

export const ContactImage = styled.img`
  background-repeat: no-repeat;
  background: linear-gradient(red, black);
  height: 35vh;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 30vh;
  }
`;


export const ContactForm = styled.div`
  
  align-items: center;
  text-align: center;
  margin: 2rem;
  text-transform: uppercase;
 
`;
export const VectorContactImage= styled.img`
height:85vh;
width:90vw;
@media screen and (max-width:1085px)
{
  width:90vw;
}
`;
export const LeftContact= styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
top:35%;
z-index:1;
left:0%;
padding:1rem;
line-height:5vh;
color:blue;
font-size:1.5rem;
transform:translate(-25%,0%);
@media screen and (max-width:1085px)
{
  flex-direction:column;
   
}

`;
export const BackContactImg=styled.img`
width:35%;
height:60vh;

@media screen and (max-width:1085px)
{
  width:45%;
}

`;
export const ContactFormContainer = styled.div`
 position:absolute;
 top:30%;
 left:45%;
 transform:translate(35% 0%);
color:blue;


h2 
{
    margin:0.5rem;
}

`;
