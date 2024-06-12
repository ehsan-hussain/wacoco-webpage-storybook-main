import React from 'react'
import Image from '../../assets/AU-Hero-image.svg'
import { useState, useEffect } from 'react'
//import Styles from '../../components/AboutUs/About.module.css'
import { AboutContainer, AboutContent, AboutImage, AboutText } from './About.styles'

const About = () => {
    const [isScroll, setScroll] = useState(0)
    ///const [textColor, setTextColor] = useState()
    //useEffect(() => {
       // if (isScroll > 700) {
         //   setTextColor('white')
///} else {
           // setTextColor('black')
        //}
    //}, [isScroll])

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const sizeMultiplier = 1 + isScroll / 600
    //const textTop = isScroll > window.innerHeight / 2 ? '0' : '50%'

    return (
        <AboutContainer>
            <AboutContent>
                <AboutText>
                <h1 className='white'
                    //style={{
                        //color: textColor,
                        //fontSize: `${//sizeMultiplier * 20}px`,
                       //top: sizeMultiplier
                    //</AboutContent>
                //}}
                >
                    About Us
                </h1>
                <h1 className='black'>About Us</h1>
                </AboutText>
                
                <AboutImage className='image'
                    src={Image}
                    alt=""
                    //style={{
                      //  transform: `scale(${sizeMultiplier})`,
                    //}}
                />
                
            </AboutContent>
        </AboutContainer>
    )
}

export default About
