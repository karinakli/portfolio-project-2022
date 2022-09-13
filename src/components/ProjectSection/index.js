import React, { useState } from 'react'
import {projectOne, projectTwo, projectThree, projectFour} from './data'
import { Modal } from './Modal'
import {ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, ProjectH2, ProjectP, LanguageWrap, ProjectP2} from './ProjectElements'

const ProjectInner = ({header, shorthand, color, languages, onClick}) => {
    


    return (
        <div>
            <ProjectCard accentColor={color} onClick={onClick}>
                
                {/* <PopUpContainer
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                >
                </PopUpContainer> */}
                <div>
                    <ProjectH2>{header}</ProjectH2>
                    <ProjectP>{shorthand}</ProjectP>
                </div>
                <LanguageWrap accentColor={color}>
                    <ProjectP2>{languages}</ProjectP2>
                </LanguageWrap>
            </ProjectCard>
            
        </div>
    )
}

const ProjectSection = () => {
    const [isOneOpen, setIsOneOpen] = useState(false);
    const [isTwoOpen, setIsTwoOpen] = useState(false);
    const [isThreeOpen, setIsThreeOpen] = useState(false);
    const [isFourOpen, setIsFourOpen] = useState(false);

    const openOneModal = () => {
        setIsOneOpen(prev => !prev);
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    const openTwoModal = () => {
        setIsTwoOpen(prev => !prev);
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    const openThreeModal = () => {
        setIsThreeOpen(prev => !prev);
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    const openFourModal = () => {
        setIsFourOpen(prev => !prev);
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

  return (
    <>  
        <Modal isOpen={isOneOpen} setIsOpen={setIsOneOpen} {...projectOne}/>
        <Modal isOpen={isTwoOpen} setIsOpen={setIsTwoOpen} {...projectTwo}/>
        <Modal isOpen={isThreeOpen} setIsOpen={setIsThreeOpen} {...projectThree}/>
        <Modal isOpen={isFourOpen} setIsOpen={setIsFourOpen} {...projectFour}/>
        <ProjectContainer id="projects">
            <ProjectH1>Projects</ProjectH1>
            <ProjectWrapper>
                <ProjectInner {...projectOne} onClick={openOneModal}/>
                <ProjectInner {...projectTwo} onClick={openTwoModal}/>
                <ProjectInner {...projectThree} onClick={openThreeModal}/>
                <ProjectInner {...projectFour} onClick={openFourModal}/>
            </ProjectWrapper>
        </ProjectContainer>
    </>
  )
}

// const Modal = ({ handleClose, show, children }) => {
  
//     return (
//         <div><h1>hi</h1></div>
//     //   <PopUpContainer show={show}>
//     //     {/* {children} */}
//     //     {/* <button onClick={handleClose}>Close</button> */}
//     //   </PopUpContainer>
//     );
//   };

export default ProjectSection
