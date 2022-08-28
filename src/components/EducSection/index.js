import React from 'react'
import { EducationWrapper, EducationContainer, EducationH1, Img, StanfordWrap, StanfordH2, ClassP, SchoolP, CourseH2 } from './EducElements'

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
                Computer Science: <br />
                Programming Methodology (CS 106A) <br />
                Data Structures and Abstractions (CS 106B) <br />
                Computer Organizations and Systems (CS 107) <br />
                An Intro to Making: What is EE (ENGR 40M) <br />
                Mathematical Foundations of Computing (CS 103)* <br />
                Intro to Probability for Computer Scientists (CS 109)* <br />
                <br />
                Other: <br />
                Principles of Economics (ECON 1) <br />
                Intro to Psychology (PSYCH 1)* <br />
                <br />
                *in progress
             </ClassP>
        </EducationWrapper>
      </EducationContainer>
    </>
  )
}

export default Education
