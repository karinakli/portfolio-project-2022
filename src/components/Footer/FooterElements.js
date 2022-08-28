import styled from 'styled-components'
import COLORS from '../../utils/colors'

export const FooterContainer = styled.div`
    height: 450px;
    background-color: ${COLORS.cream};
`

export const FooterWrap = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterH1 = styled.h1`
    font-size: 3.5rem;
    margin-bottom: 36px;
    font-weight: bold;
    text-align: left;
    color: ${COLORS.brown};
`

export const BotWrap = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
`


export const ContactBtn = styled.a`
    border-radius: 10px;
    outline: 3px solid ${COLORS.pink};
    background: 'transparent';
    white-space: nowrap;
    padding: 15px 50px;
    color: ${COLORS.brown};
    font-size: 2rem;
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
    font-size: 1.25rem;
    color: ${COLORS.brown};
    line-height: 2rem;
    font-weight: 400;
    text-align: center;
    margin-top: 60px;
`