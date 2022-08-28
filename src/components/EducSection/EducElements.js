import styled from 'styled-components'
import COLORS from '../../utils/colors'

export const EducationContainer = styled.div`
    height: 900px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: ${COLORS.cream};

    @media screen and (max-width: 1000px) {
        height: 1200px;
    }
`

export const EducationWrapper = styled.div`
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const EducationH1 = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: ${COLORS.brown};
`

export const SchoolWrap = styled.div`
`   

export const Img = styled.img`
    position: relative;
    z-index: 3;
    top: 18px;
    right: 20px;
    width: 8rem;
    height: 8rem;

    @media screen and (max-width: 1000px) {
        margin-top: 20px;
        position: static;
    }
`

export const StanfordWrap = styled.div`
    position: relative;
    background: ${COLORS.darkCream};
    display: flex;
    align-items: center;
    justify-content: right;
    width: 600px;
    height: 4rem;
    border-radius: 1rem;
    padding-right: 70px;
    z-index: 2;
    bottom: 85px;
    left: 0;

    @media screen and (max-width: 1000px) {
        margin-top: 20px;
        position: static;
        justify-content: center;
        padding-right: 0px;
        width: 450px;
    }
`

export const StanfordH2 = styled.h2`
    font-size: 1.5rem;
    color: ${COLORS.brown};
    font-weight: 600;
    text-align: right;

    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`

export const SchoolP = styled.p`
    font-size: 1rem;
    color: ${COLORS.brown};
    line-height: 1.5rem;
    font-weight: 400;
    text-align: center;
    position: relative;
    bottom: 73px;
    left: 5px;

    @media screen and (max-width: 1000px) {
        position: static;
    }
`

export const CourseH2 = styled.h2` 
    font-size: 1.5rem;
    color: ${COLORS.darkCoral};
    font-weight: 600;
    text-align: center;
    position: relative;
    bottom: 40px;

    @media screen and (max-width: 1000px) {
        position: static;
        margin-top: 40px;
    }
`

export const ClassP = styled.p`
    font-size: 1rem;
    color: ${COLORS.brown};
    line-height: 1.5rem;
    font-weight: 400;
    text-align: center;
    position: relative;
    bottom: 30px;

    @media screen and (max-width: 1000px) {
        position: static;
    }
`