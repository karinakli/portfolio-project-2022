import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogoWrap, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
import pdf from './resume.pdf';
import COLORS from '../../utils/colors';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 100) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <>
    <IconContext.Provider value={{color: COLORS.brown}}>
      <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogoWrap to='/' onClick={toggleHome}>
                    <NavLogo to='/' onClick={toggleHome}>KL</NavLogo>
                </NavLogoWrap>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-70}>
                            About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="education" smooth={true} duration={500} spy={true} exact='true' offset={-70}>
                          Education</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-70}>
                          Projects</NavLinks>
                    </NavItem>
                    
                    <NavBtn>
                        <NavBtnLink href={pdf} target="_blank" rel="noreferrer">Resume</NavBtnLink>
                    </NavBtn>
                </NavMenu>
                
            </NavbarContainer>
          
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
