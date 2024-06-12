import Hero from './Hero';
import logo from '../../assets/HeroImg.svg';


export default {
    title: 'main_ui/LandingPage/Hero',
    component: Hero,
};

export const WelcomePage = {
    args: {
        backgroundColor:"##FF5D75",
        label: "Welcome Page",
        logo: logo,
    }
};