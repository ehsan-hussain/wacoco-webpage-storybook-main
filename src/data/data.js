//Assets
import Img1 from "../assets/TeamMember-Photo.svg";
import Img2 from "../assets/TeamMember2-Photo.svg";
import Img3 from "../assets/TeamMember3-Photo.svg";
import Img4 from "../assets/TeamMember4-Photo.svg";
import Img5 from "../assets/TeamMember5-Photo.svg";
import Img6 from "../assets/TeamMember6-Photo.svg";
import Img7 from "../assets/TeamMember7-Photo.svg";
import firstStoryCard from "../assets/Card1.png";
import secondStoryCard from "../assets/Card2.png";
import thirdStoryCard from "../assets/Card3.png";

export const items = [
    {
        title: "About us",
        url: "#",
    },
    {
        title: "Our approach",
        url: "#",
    },
    {
        title: "How we work",
        url: "#",
        submenu: [
            {
                title: "Students",
                url: "#"
            },
            {
                title: "Clients",
                url: "#"
            }
        ]
    },
    {
        title: "Career",
        url: "#",
    },
];

export const headerInfo = [
    {
        title: "About us",
        url: "#",
    },
    {
        title: "Our approach",
        url: "#",
    },
    {
        title: "Services",
        url: "#",
    },
    {
        title: "Career",
        url: "#",
    },
];

export const footerInfo = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    contact: {
        email: "wacoco@wacoco.es",
        phone: "+46(0)735335745"
    },
    social: "Linkedin"
};

export const teamMembersInfo = [
    {
        name: "John Doe",
        position: "Software Engineer",
        image: Img1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum dapibus ipsum, a placerat nulla dictum nec. "
    },
    {
        name: "Sarah Wilson",
        position: "DevOps Engineer",
        image: Img2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium aliquam mauris et tincidunt. Nulla vel velit dignissim, sodales odio."
    },
    {
        name: "Jane Smith",
        position: "Product Manager",
        image: Img3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nisl nec mi consectetur tempus. Curabitur euismod magna id velit."
    },
    {
        name: "Alex Johnson",
        position: "UX/UI Designer",
        image: Img4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada quam ligula, non imperdiet ex pretium a. Quisque maximus finibus."
    },
    {
        name: "Emily Brown",
        position: "Frontend Developer",
        image: Img5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ipsum a tellus pretium condimentum sit amet quis mi Praesent."
    },
    {
        name: "Max Taylor",
        position: "Backend Developer",
        image: Img6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nisl eu dolor tincidunt interdum at nec tellus. Nulla vitae."
    },
    {
        name: "Anna White",
        position: "Data Analyst",
        image: Img7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Nullam in libero nec nunc tincidunt aliquam. Nullam."
    }
];

export const slides = [
    {
        index: 1,
        content: "Embark on a journey through the inception of WaCoCo, where our story intertwines with our vision.",
        image: firstStoryCard,
    },
    {
        index: 2,
        content: "Our genesis was marked by a bold aspiration: to revolutionize outsourced software development by seamlessly integrating students into real IT projects",
        image: secondStoryCard,
    },
    {
        index: 3,
        content: "We amplify their passion to change the world by giving an opportunity to create real value for our clients.",
        image: thirdStoryCard,
    },
];