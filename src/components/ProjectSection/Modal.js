import React, {useRef} from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import COLORS from '../../utils/colors'

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 40px;
    right: 40px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    color: ${COLORS.brown}
`

const Background = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 80px;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
`

const ModalWrapper = styled.div`
    width: 750px;
    height: 500px;
    background: ${COLORS.cream};
    display: flex;
    padding: 40px;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    border-radius: 50px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);

    h1 {
        color: ${COLORS.brown};
        font-size: 2.5rem;

    }
    p {
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${COLORS.brown};
        margin-top: 20px;
    }

    @media screen and (max-width: 550px) {
        height: 600px;
    }
`

const AccentP = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${COLORS.brown};
    font-style: italic;
    font-weight: 600;
    margin-top: 40px;
`

const LinkP = styled.a`
    font-size: 1rem;
    color: ${COLORS.darkCoral};
    
    line-height: 1.5rem;
    text-decoration: none;
    display: inline-block;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: ${COLORS.pink};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
    }
`


export const Modal = ({isOpen, setIsOpen, header, tools, sourceText, sourceUrl, description}) => {
    const closeModal = () => {
        setIsOpen(false);

        document.body.style.overflow='unset';
    }

    const modalRef = useRef();

    const backgroundClose = e => {
        if (modalRef.current === e.target) {
            setIsOpen(false);
        }
    }


    return (
        <>
        {isOpen ? (
            <Background ref={modalRef} onClick={backgroundClose}>
                <ModalWrapper isOpen={isOpen}>
                    <h1>{header}</h1>
                    <AccentP>
                        Tools: {' '}{tools}{' '} | Source Code: {' '} 
                        <LinkP href={sourceUrl} target="_blank" rel="noreferrer">
                            {sourceText}
                        </LinkP>
                    </AccentP>
                    <p>{description}</p>
                    <CloseModalButton aria-label='Close modal' onClick={closeModal} />
                </ModalWrapper>
            </Background>
        ) : null}
        </>
    )
}