import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #101522;
  position: relative;
  width: 100%;
  padding: 0.5rem;
  height:auto;
  font-size: 1.05rem;
  color: #fff;
  letter-spacing:0.05rem;
  .title {
    text-align: center;
    margin: 1rem;
    text-transform: uppercase;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
    padding: 1rem;
    line-height: 6vh;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.96rem;
   
  }
`;

export const LeftContainer = styled.div`
  text-align: center;
  padding: 0.5rem;
  p {
    margin: 0.5rem;
  }
`;
export const ImageIcon = styled.img`
  height: 15vh;
  background-position: center;
  margin: 0.5rem;
`;
export const MiddleContainer = styled.div`


`;
export const IconContainer = styled.div`
  margin: 1rem;
  p {
    margin: 0.5rem;
  }
  .icon {
    font-size: 1rem;
  }
`;
export const RightContainer = styled.div`
  margin: 1rem;
  margin-right: 3rem;
`;
export const LinkContainer = styled.div`
  text-align: center;
  a {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: #fff;
  }
  a:hover {
    color: red;
  }
  @media screen and (max-width: 350px) {
    margin-bottom: 2rem;
   
  }
`;

export const CopyRightSection = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  margin: 0.5rem;
  font-size: 1rem;
`;
