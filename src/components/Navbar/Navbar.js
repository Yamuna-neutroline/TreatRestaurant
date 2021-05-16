import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,

} from './Navbar.elements';
import navlogo from "../../assets/logos/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
               <NavIcon src = {navlogo}/> 
          
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  HOME
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/aboutus' onClick={closeMobileMenu}>
                  ABOUT US
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/menu' onClick={closeMobileMenu}>
                  MENU
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contact' onClick={closeMobileMenu}>
                  CONTACT
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/reservation' onClick={closeMobileMenu}>
                  RESERVATION
                </NavLinks>
                </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
