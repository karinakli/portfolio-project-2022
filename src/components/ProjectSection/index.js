import React from 'react'
import {projectOne, projectTwo, projectThree, projectFour} from './data'
import {ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, ProjectH2, ProjectP, LanguageWrap, ProjectP2} from './ProjectElements'

const ProjectInner = ({header, description, color, languages}) => {
    return (
        <ProjectCard accentColor={color}>
            <div>
                <ProjectH2>{header}</ProjectH2>
                <ProjectP>{description}</ProjectP>
            </div>
            <LanguageWrap accentColor={color}>
                <ProjectP2>{languages}</ProjectP2>
            </LanguageWrap>
        </ProjectCard>
    )
}

const ProjectSection = ({header, description, color, languages}) => {
  return (
    <>
        <ProjectContainer id="projects">
            <ProjectH1>Projects</ProjectH1>
            <ProjectWrapper>
                <ProjectInner {...projectOne}/>
                <ProjectInner {...projectTwo}/>
                <ProjectInner {...projectThree}/>
                <ProjectInner {...projectFour}/>
            </ProjectWrapper>
        </ProjectContainer>
    </>
  )
}

export default ProjectSection
