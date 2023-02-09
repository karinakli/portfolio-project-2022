import styled from 'styled-components'
import COLORS from '../../utils/colors'

export const FooterContainer = styled.div`
    height: 400px;
    padding: 50px;
    /* background-color: ${COLORS.cream}; */
    background: 'white';

    @media screen and (max-width: 768px) {
        height: 500px;
    }
`

export const FooterWrap = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterH1 = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 36px;
    font-weight: bold;
    text-align: left;
    color: ${COLORS.brown};

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

export const BotWrap = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
}   
`


export const ContactBtn = styled.a`
    border-radius: 10px;
    outline: 3px solid ${COLORS.pink};
    background: 'transparent';
    white-space: nowrap;
    padding: 12px 50px;
    max-width: 225px;
    color: ${COLORS.brown};
    font-size: 1.5rem;
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

export const SocialMediaWrap = styled.div`
    flex-direction: row;
    display: flex;
    position: relative;
    top: 40px;
`

export const SocialIcon = styled.div`
    margin-left: 20px;
    cursor: pointer;
`

export const Img = styled.img`
    width: 30px;
`

export const FooterP = styled.p`
    font-size: 1rem;
    color: ${COLORS.brown};
    line-height: 2rem;
    font-weight: 400;
    text-align: center;
    margin-top: 60px;
`