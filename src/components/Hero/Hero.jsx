import React, { useState, useEffect } from 'react'
import { HeroContainer, HeroContent, HeroImage } from './Hero.styles'
import logo from '../../assets/HeroImg.svg'
import Button from '../button/button'

const LandingPageHero = ({ text = '  WACOCO', infinite = true }) => {
    const [isDesplayText, setDisplayText] = useState('')
    const [isIndex, setIndex] = useState(0)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisplayText(text.slice(0, isIndex + 1))
            setIndex(isIndex + 1)
        }, 500)

        if (isIndex === text.length) {
            if (infinite) {
                setIndex(0)
            } else {
                clearTimeout(timeout)
            }
        }
        return () => clearTimeout(timeout)
    }, [text, isIndex, infinite])
    return (
        <HeroContainer>
            <HeroImage src={logo} alt="Hero" />
            <HeroContent>
                <h1>
                    Welcome to {' '} <br /> <span>{isDesplayText}</span>
                </h1>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi vel nibh in
                    <br /> magna congue ultricies. Aenean sagittis
                </p> */}
                <Button
                    label="Contact us"
                    size="big"
                    backgroundColor={'blue'}
                />
            </HeroContent>
        </HeroContainer>
    )
}

export default LandingPageHero
