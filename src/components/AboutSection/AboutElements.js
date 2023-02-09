import styled from 'styled-components'
import COLORS from '../../utils/colors';

export const AboutContainer = styled.div`
    color: #E8D9C9;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-left: 100px;
    background: 'white';
    /* background: ${COLORS.darkCream}; */

    @media screen and (max-width: 1000px) {
        height: 1100px;
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

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        padding: 0 0px;
    }

    @media screen and (max-width: 480px) {
        max-width: 400px;
    }
`

export const AboutImgWrap = styled.div`
    position: relative; 
    bottom: 20px;
    height: 379px;
    max-width: 304px;
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
    width: 700px;
    height: 100%;
    flex-direction: column;

    @media screen and (max-width: 1000px) {
        margin-top: 60px;
        justify-self: center;
    }

    @media screen and (max-width: 480px) {
        width: 400px;
        padding-right: 40px;
        margin-left: 0px
    }
`

export const AboutH1 = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 36px;
    font-weight: bold;
    color: ${COLORS.brown};

    @media screen and (max-width: 768px) {
        margin-left: 50px;
    }
`

export const AboutP = styled.p`
    font-size: 1rem;
    max-width: 600px;
    color: ${COLORS.brown};
    line-height: 1.5rem;

    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
        max-width: 400px;
        margin-left: 50px;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`

export const AboutAccentP = styled.a`
    font-size: 1rem;
    color: ${COLORS.darkCoral};
    
    line-height: 1.5rem;
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

    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
    }
`