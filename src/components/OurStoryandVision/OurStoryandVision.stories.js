import React from 'react';
import OurStoryandVision from './OurStoryandVision';
import { slides } from '../../data/data';

export default {
  title: 'OurStoryandVision',
  component: OurStoryandVision,
};

export const Default = () => (
  <OurStoryandVision
  slides={slides}
    // slides={[
    //   "Embark on a journey through the inception of WaCoCo, where our story intertwines with our vision.",
    //   "Our genesis was marked by a bold aspiration: to revolutionize outsourced software development by seamlessly integrating students into real IT projects",
    //   "We amplify their passion to change the world by giving an opportunity to create real value for our clients."
    // ]}
  />
);

