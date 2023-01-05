import React from 'react'
import { EducationWrapper, EducationContainer, EducationH1, Img, StanfordWrap, StanfordH2, ClassP, ClassBoldP, SchoolP, CourseH2 } from './EducElements'

const Education = () => {
  return (
    <>
      <EducationContainer id="education">
        <EducationH1>Education</EducationH1>
        <EducationWrapper>
            <Img src={require('../../images/stanford.png')} alt={'stanford logo'}/>
            <StanfordWrap>
                <StanfordH2>Stanford University | Stanford, CA</StanfordH2>
            </StanfordWrap>
            <SchoolP>B.S. in Computer Science, Expected: June 2025</SchoolP>
             <CourseH2>Relevant Coursework</CourseH2>
             <ClassP>
                <ClassBoldP>Computer Science:</ClassBoldP>
                Programming Methodology (CS 106A) <br />
                Data Structures and Abstractions (CS 106B) <br />
                Computer Organizations and Systems (CS 107) <br />
                An Intro to Making: What is EE (ENGR 40M) <br />
                Intro to Probability for Computer Scientists (CS 109) <br />
                Intro to Human Computer Interaction (CS 147) <br />
                Cross-Platform Mobile App Development (CS 47) <br/>
                Mathematical Foundations of Computing (CS 103)* <br />
                From Languages to Information (CS 124)* <br />
                Design for Behavior Change (CS 247B)* <br />
                <br />
                <ClassBoldP>Product Design:</ClassBoldP>
                Design for Learning: Co-Designing Connection and Community (DESIGN 292) <br />
                Design Sketching (DESIGN 172)* <br />
                <br />
                <ClassBoldP>Other:</ClassBoldP>
                Principles of Economics (ECON 1) <br />
                <br />
                *in progress
             </ClassP>
        </EducationWrapper>
      </EducationContainer>
    </>
  )
}

export default Education
