import React from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import {FaFacebook,FaInstagram} from 'react-icons/fa'
import {
  FooterContainer,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  LinkContainer,
  IconContainer,
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
          <h3 className="title">Opening Hours:</h3>
          <p >Sun-Fri:6:00 am-5:00pm</p>
          <p>Sat:10:00 am-3:00pm</p>
        </LeftContainer>
        <MiddleContainer> 
         <h3 className="title">Contact Information:</h3>
         <IconContainer>
         <p>< LocationOnIcon className="icon"/> Koteshwor, Kathmandu Nepal</p>
        <p><PhoneIcon  className="icon"/> 98457125687</p>
        <p>< EmailIcon  className="icon"/> treat@gmail.com </p>
         </IconContainer>
        
        </MiddleContainer>
        <RightContainer>
        <h3 className="title">Follow us on:</h3>
          <LinkContainer>
          
            <a href="#" className="facebook"> <FaFacebook/></a>
            <a href="#" className="instagram"><FaInstagram/></a>
            <a href="#" className="twitter"> <TwitterIcon/></a>
          </LinkContainer>
        </RightContainer>
        <CopyRightSection>@2021 Treat Restaurant, All Right Reserved</CopyRightSection>
      </FooterContainer>
    </>
  );
};

export default Footer;
