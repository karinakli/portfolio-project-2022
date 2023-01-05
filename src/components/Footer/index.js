import React from 'react'
import {FooterContainer, FooterWrap, FooterH1, BotWrap, ContactBtn, SocialMediaWrap, SocialIcon, SocialIconLink, Img, FooterP} from './FooterElements'

const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterWrap>
                <FooterH1>Thank you for visiting!</FooterH1>
                <BotWrap>
                    <ContactBtn href="mailto:karinali@stanford.edu" target="_blank" aria-label="Email">Contact Me</ContactBtn>
                    <SocialMediaWrap>
                        <SocialIcon>
                            <a href="https://github.com/karinakli" target="_blank" aria-label="Linkedin">
                                <Img src={require('../../images/github.png')} alt={'github'}/>
                            </a>
                        </SocialIcon>
                        <SocialIcon>
                            <a href="https://www.linkedin.com/in/karina-li1023/" target="_blank" aria-label="Linkedin">
                                <Img src={require('../../images/linkedin.png')} alt={'linkedin'}/>
                            </a>
                        </SocialIcon>
                        <SocialIcon>
                            <a href="//www.instagram.com/karina.li" target="_blank" aria-label="Instagram">
                                <Img src={require('../../images/instagram.png')} alt={'instagram'}/>
                            </a>
                        </SocialIcon>
                    </SocialMediaWrap>
                </BotWrap>
                
                <FooterP>Made by Karina Li 2023</FooterP>
            </FooterWrap>
        </FooterContainer>
    </>
  )
}

export default Footer
