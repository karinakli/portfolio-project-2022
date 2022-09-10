import React from 'react'
import {AboutContainer, AboutWrapper, AboutImgWrap, Img, AboutTextWrap, AboutH1, AboutP, AboutAccentP} from './AboutElements'

const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
            <AboutImgWrap>
                <Img src={require('../../images/profile.JPG')} alt={'profile picture'} />
            </AboutImgWrap>
            <AboutTextWrap>
                <AboutH1>
                    A Little Bit About Me
                </AboutH1>
                <AboutP>
                Hello! I am Karina Li from Orange County, California. I am a sophomore at Stanford University majoring
                in Computer Science with a focus on Human-Computer Interaction. I am passionate about 
                exploring new ideas and bringing them to life through the intersection of 
                technology and art. 
                <br /> <br />
                This past summer I worked as an App Development Intern at {' '}
                <AboutAccentP href="https://rooster-app.com/" target="_blank" rel="noreferrer">Rooster</AboutAccentP>
                , a location-based mobile app startup for searching and booking a broad range of children’s 
                extracurricular activities. 
                <br /> <br />
                Besides coding, you can find me performing with my dance teams, crocheting room decor, and playing 
                solitaire!
                </AboutP>
            </AboutTextWrap>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default AboutSection
