import styled from 'styled-components'
import COLORS from '../../utils/colors'

export const ProjectContainer = styled.div`
    height: 900px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: ${COLORS.darkCream};
    
    @media screen and (max-width: 1000px) {
        height: 1500px;
    }
`

export const ProjectH1 = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 36px;
    font-weight: bold;
    text-align: center;
    color: ${COLORS.brown};
`

export const ProjectWrapper = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    align-items: center;
    grid-gap: 30px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`

export const ProjectCard = styled.div`
    background: ${COLORS.cream};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    width: 400px;
    height: 250px;
    padding: 20px;
    transition: all 0.2 ease-in-out;
    border: 4px solid ${(props) => props.accentColor};

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ProjectH2 = styled.h2`
    font-size: 1.2rem;
    color: ${COLORS.brown};
    font-weight: 600;
    text-align: left;
    margin-bottom: 10px;
`

export const ProjectP = styled.p`
    font-size: 1rem;
    color: ${COLORS.brown};
    line-height: 1.5rem;
    font-weight: 400;
    text-align: left;
`

export const LanguageWrap = styled.div`
    width: 5.5rem;
    height: 2.25rem;
    border-radius: 10px;
    background-color: ${(props) => props.accentColor};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProjectP2 = styled(ProjectP)`
    text-align: center;
`