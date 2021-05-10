import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import HomeBackground from "../assets/images/wall.jpg";



const HeroSectionContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100vh;
  background: url(${HomeBackground}) center/cover, no-repeat border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: column;
`;

const ContentSection = styled.div`
  font-size: 4.5rem;
  font-weight: 550;
  color: #fff;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const Homepage = () => {
 
  return (
    <HeroSectionContainer id="home">
      <Container maxWidth="lg">
        <ContentSection>Welcome to</ContentSection>
        <ContentSection>Treat Restaurant</ContentSection>
      </Container>
    </HeroSectionContainer>
  );
};

export default Homepage;