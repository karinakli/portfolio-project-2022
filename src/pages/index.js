import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import Education from '../components/EducSection'
import ProjectSection from '../components/ProjectSection'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Modal } from '../components/ProjectSection/Modal'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>  
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <AboutSection />
            <Education />
            <ProjectSection />
            <Footer />
        </>
    )
}

export default Home