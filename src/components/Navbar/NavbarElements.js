import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import COLORS from '../../utils/colors'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#F3ECE4' : "transparent")};
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
    height: 100px;
    margin-top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0px 24px;
    max-width: 1500px;
`

export const NavLogoWrap = styled.div`
    margin-top: 4px;
    align-items: center;
    justify-content: center;
    justify-self: flex-start;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: ${COLORS.brown};
    display: flex;
    cursor: pointer;
`

export const NavLogo = styled(LinkR)`
    color: ${COLORS.cream};
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem; 
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    align-items: center;
    justify-content: center;
    display: flex;
`

export const NavLinks = styled(LinkS)`
    color: ${COLORS.brown};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0rem 16px;
    margin-left: 20px;
    height: 100%;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${COLORS.darkCoral};
    }

    &.active {
        border-bottom: 6px solid ${COLORS.pink};
        border-radius: 1px;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    margin-left: 26px;
    align-items: center;

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const NavBtnLink = styled.a`
    border-radius: 10px;
    outline: 2px solid ${COLORS.pink};
    background: 'transparent';
    white-space: nowrap;
    padding: 10px 22px;
    color: ${COLORS.brown};
    font-size: 1.25rem;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgba(96, 75, 72, 0.1);
        color: ${COLORS.brown};
    }
`