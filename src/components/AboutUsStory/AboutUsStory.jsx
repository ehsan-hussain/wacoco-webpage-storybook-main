import React from 'react'
import FirstImage from '../../assets/Vision photo.svg'
import SecondImage from '../../assets/Massion photo.svg'
//import Styles from '../AboutUsStory/AboutUsStory.module.css'
import { AboutUsStoryContainer, AboutUsStoryContent } from './AboutUsStory.styles'

const AboutUsStory = () => {
    return (
        <AboutUsStoryContainer>
            <h1>Story</h1>
            <p>
                Lorem iipsum dolor sit amet, Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer elementum dapibus ipsum, a
                placerat nulla dictum nec. Vestibulum venenatis ultrices mollis.
                Integer vel mi vitae urna convallis ullamcorper et ut nibh.
                Integer quis magna dignissim, bibendum purus id, laoreet risus.
                Etiam ac velit ut nisl lobortis fermentum. Quisque in purus
                orci. Nullam facilisis pellentesque leo eget semper. Integer
                pretium tincidunt elementum. Fusce interdum nec nulla et dictum.
                Vestibulum finibus, ligula at cursus ultrices, magna orci
                interdum enim, quis commodo nibh tellus vitae lacus. Maecenas et
                mauris ac lectus ullamcorper maximus et a nisi. Proin aliquet
                ipsum ac blandit ultrices.
            </p>

            <AboutUsStoryContent>
                <div>
                    <img src={FirstImage} alt="" />
                    <h1>Vision</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer elementum dapibus ipsum, a placerat nulla dictum
                        nec. Vestibulum venenatis ultrices mollis. Integer vel
                        mi vitae urna convallis ullamcorper et ut nibh. Integer
                        quis magna dignissim, bibendum purus id, laoreet risus.
                        Etiam ac velit ut nisl lobortis fermentum.
                    </p>
                </div>
                <div>
                    <img src={SecondImage} alt="" />
                    <h1>Mission</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer elementum dapibus ipsum, a placerat nulla dictum
                        nec. Vestibulum venenatis ultrices mollis. Integer vel
                        mi vitae urna convallis ullamcorper et ut nibh. Integer
                        quis magna dignissim, bibendum purus id, laoreet risus.
                    </p>
                </div>
            </AboutUsStoryContent>
        </AboutUsStoryContainer>
    )
}

export default AboutUsStory
