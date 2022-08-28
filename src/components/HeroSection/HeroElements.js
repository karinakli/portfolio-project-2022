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
    padding-top: 337px;
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
    font-size: 8rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 7.5rem;
    }

    @media screen and (max-wdith: 480px) {
        font-size: 7rem;
    }
`

export const HeroSubtitle = styled.p`
    margin-left: 50px;
    color: ${COLORS.pink};
    font-size: 2.5rem;
    line-height: 43.58px;
    font-weight: 700;
`

export const HeroP = styled.p`
    margin-left: 50px;
    max-width: 600px;
    margin-bottom: 275px;
    font-size: 1.5rem;
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
    width: 62px;
    height: 62px; 
    margin-left: 252px;

    &:hover {
        transition: 0.3s ease-in-out;
        color: ${COLORS.green};
    }
`