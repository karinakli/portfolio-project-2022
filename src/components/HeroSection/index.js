import React, {useState} from 'react'
import {HeroContainer, HeroContent, HeroH1, HeroP, HeroSubtitle, IconLink, DownArrow} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(true)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <>
        <HeroContainer>
            <HeroContent>
                <HeroSubtitle>Hi, my name is</HeroSubtitle>
                <HeroH1>Karina Li</HeroH1>
                <HeroP>I'm a current computer science student at Stanford interested in software development and design.</HeroP>
                <IconLink to="about" onMouseEnter={onHover} onMouseLeave={onHover}
                smooth={true} duration={500} spy={true} exact='true'>
                    <DownArrow />
                </IconLink>
            </HeroContent>
        </HeroContainer>
    </>
  )
}

export default HeroSection
