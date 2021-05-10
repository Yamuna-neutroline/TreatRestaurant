import React from "react";
import { GrLocation} from 'react-icons/gr'
import { BiPhone} from 'react-icons/bi'
import { MdEmail} from 'react-icons/md'
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
import {
  FooterContainer,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  LinkContainer,
  FormContainer,
  ImageIcon,
  CopyRightSection,
} from "./FooterElements";
import Logo from '../../assets/logos/logo.png'
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <LeftContainer>
          <ImageIcon src={Logo}/>
          <h3  className="title">Opening Hours:</h3>
          <p >Sun-Fri:6:00 am-5:00pm</p>
          <p>Sat:10:00 am-3:00pm</p>
        </LeftContainer>
        <MiddleContainer> 
         <h2  className="title">Contact Information</h2>
        <p> <GrLocation/> Koteshwor, Kathmandu Nepal</p>
        <p><BiPhone/> 98457125687</p>
        <p><MdEmail/> treat@gmail.com </p>
        </MiddleContainer>
        <RightContainer>
          <FormContainer>
              <form>
                  <input type="text" name="subscribe" placeholder="Enter email"/>
                  <input type="submit" value="Subscribe"/>
              </form>
          </FormContainer>
          <LinkContainer>
          <h4  className="title">Follow us on:</h4>
            <a href="#" className="facebook"> <FaFacebook/></a>
            <a href="#" className="instagram"><FaInstagram/></a>
            <a href="#" className="twitter"> <FaTwitter/></a>
          </LinkContainer>
        </RightContainer>
        <CopyRightSection>@2021 Treat Restaurant, All Right Reserved</CopyRightSection>
      </FooterContainer>
    </>
  );
};

export default Footer;
