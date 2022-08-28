import styled from 'styled-components'
import COLORS from '../../utils/colors';

export const AboutContainer = styled.div`
    color: #E8D9C9;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    background: ${COLORS.darkCream};

    @media screen and (max-width: 1200px) {
        height: 1500px;
    }

    @media screen and (max-width: 768px) {
        padding: 100px 0px;
    }
`

export const AboutWrapper = styled.div`
    z-index: 1;
    height: 450px;
    max-width: 1400px;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    display: flex;
    /* flex-direction: row; */

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        padding: 0 0px;
    }
`

export const AboutImgWrap = styled.div`
    height: 600px;
    min-width: 500px;
    border: 4px solid #CCD4BF;
    border-radius: 29px;
`

export const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
`

export const AboutTextWrap = styled.div`
    margin-left: 120px;
    display: flex;
    min-width: 600px;
    max-width: 800px;
    height: 100%;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
        margin-top: 60px;
        justify-self: center;
    }
`

export const AboutH1 = styled.h1`
    font-size: 3.5rem;
    margin-bottom: 36px;
    font-weight: bold;
    color: ${COLORS.brown};
`

export const AboutP = styled.p`
    font-size: 1.5rem;
    color: ${COLORS.brown};
    line-height: 2rem;
`

export const AboutAccentP = styled.a`
    font-size: 1.5rem;
    color: ${COLORS.darkCoral};
    line-height: 2rem;
    text-decoration: none;
    display: inline-block;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: ${COLORS.pink};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`