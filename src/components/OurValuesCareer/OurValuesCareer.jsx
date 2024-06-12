import React from 'react';
import SecondImage from '../../assets/Massion photo.svg';
import FirstImage from '../../assets/Vision photo.svg';
import { OurValuesCareerContainer, OurValuesCareerContent } from './OurValuesCareer.styles';

const OurValuesCareer = () => {
    return (
        <OurValuesCareerContainer>
            <OurValuesCareerContent>
                <div>
                <img src={FirstImage} alt="Vision" />
                    <h1>Job Opportunities</h1>
                    <p>
                        At WaCoCo, we're not just offering internships – we're providing
                        pathways to future employment. Our interns have a real chance
                        to get into full-time positions with us or other leading tech
                        companies. By joining WaCoCo, you'll gain valuable industry
                        experience and build a network of connections that can open
                        doors to exciting career opportunities.
                    </p>
                </div>
                <div>
                <img src={SecondImage} alt="Mission" />
                    <h1>Our Values</h1>
                    <p>
                        We prioritize practical learning over theoretical knowledge. While
                        we value academic achievements, we place greater emphasis on
                        real-world skills and experience. At WaCoCo, you won't find
                        yourself stuck in endless lectures or mundane tasks – instead,
                        you'll be actively engaged in challenging projects that push you
                        to grow and succeed.
                    </p>
                </div>
            </OurValuesCareerContent>
        </OurValuesCareerContainer>
    );
};

export default OurValuesCareer;
