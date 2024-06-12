import React from 'react'
import Button from '../button/button'
import Image from '../../assets/Photo.svg'
import { HowWeWorkContainer, HowWeWorkBox, HowWeWorkImg, HowWeWorkText } from './HowWeWork.styles'

const HowWeWork = () => {
    return (
        <HowWeWorkContainer>
            <HowWeWorkBox>
                <p>
                    Lets take a look at
                    <span>
                        {' '}
                        how we <br /> work
                    </span>
                </p>
                <div>
                    <Button label={'Why use our sevices?'} size={'big'} backgroundColor={'blue'}/>
                    <Button label={'Why use our sevices?'} size={'big'}  backgroundColor={'defult'}/>
                </div>
            </HowWeWorkBox>
            <HowWeWorkImg src={Image} />
            <HowWeWorkText>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras in mauris a magna imperdiet rhoncus a a velit. Quisque
                    placerat mauris nulla, vitae scelerisque velit pharetra eu.
                    Vestibulum lobortis accumsan lobortis. Nunc vulputate, mi id
                    tincidunt viverra.
                </p>
            </HowWeWorkText>
        </HowWeWorkContainer>
    )
}

export default HowWeWork
