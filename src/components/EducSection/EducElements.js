import styled from 'styled-components'
import COLORS from '../../utils/colors'

export const EducationContainer = styled.div`
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: ${COLORS.cream};

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const EducationWrapper = styled.div`

`

export const EducationH1 = styled.h1`
    font-size: 3.5rem;
    margin-bottom: 36px;
    font-weight: bold;
    color: ${COLORS.brown};
`

export const SchoolWrap = styled.div`
`   

export const Img = styled.img`
    position: relative;
    z-index: 3;
    top: 0;
    right: 50px;
    width: 8rem;
    height: 8rem;
`

export const StanfordWrap = styled.div`
    position: relative;
    background: ${COLORS.darkCream};
    display: flex;
    align-items: center;
    justify-content: right;
    width: 700px;
    height: 5rem;
    border-radius: 1.5rem;
    padding-right: 70px;
    z-index: 2;
    bottom: 105px;
    left: 0;
`

export const StanfordH2 = styled.h2`
    font-size: 2rem;
    color: ${COLORS.brown};
    font-weight: 600;
    text-align: right;
`

export const SchoolP = styled.p`
    font-size: 1.5rem;
    color: ${COLORS.brown};
    line-height: 2rem;
    font-weight: 400;
    text-align: center;
    position: relative;
    bottom: 90px;
`

export const CourseH2 = styled.h2` 
    font-size: 2rem;
    color: ${COLORS.darkCoral};
    font-weight: 600;
    text-align: center;
    position: relative;
    bottom: 40px;
`

export const ClassP = styled.p`
    font-size: 1.5rem;
    color: ${COLORS.brown};
    line-height: 2rem;
    font-weight: 400;
    text-align: center;
    position: relative;
    bottom: 30px;
`