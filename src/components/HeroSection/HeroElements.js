import styled from 'styled-components';
import {Link} from 'react-scroll';
import {BsFillCaretDownFill as Arrow} from 'react-icons/bs';
import COLORS from '../../utils/colors'

export const HeroContainer = styled.div`
    background: ${COLORS.cream};
    display: flex;
    flex-grow: 1;
    min-height: 100vh;
    justify-content: center;
    padding-top: 250px;
    width: 100%;
    position: relative;
    z-index: 1;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`

export const HeroH1 = styled.h1`
    color: ${COLORS.brown};
    font-size: 6rem;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 5.5rem;
    }

    @media screen and (max-wdith: 480px) {
        font-size: 5rem;
    }
`

export const HeroSubtitle = styled.p`
    margin-left: 10px;
    text-align: left;
    color: ${COLORS.pink};
    font-size: 2rem;
    line-height: 43.58px;
    font-weight: 700;
`

export const HeroP = styled.p`
    margin-left: 10px;
    text-align: left;
    max-width: 450px;
    margin-bottom: 100px;
    font-size: 1rem;
    line-height: 27.24px;
    font-weight: 400;
    color: ${COLORS.brown};
`

export const IconLink = styled(Link)`
    position: relative;
    background: transparent;
    cursor: pointer;
    outline: none;
`

export const DownArrow = styled(Arrow)`
    color: ${COLORS.brown};
    width: 50px;
    height: 50px; 
    margin-left: 252px;

    &:hover {
        transition: 0.3s ease-in-out;
        color: ${COLORS.green};
    }
`