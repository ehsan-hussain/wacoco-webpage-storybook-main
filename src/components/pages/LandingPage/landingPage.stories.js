import LandingPage from './landingPage';
import {items, footerInfo} from '../../../data/data';



export default {
    title: 'main_ui/Pages/LandingPage',
    component: LandingPage,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        items: {
        control: {
            type: "array"
        }
        },
        footerInfo: {
        control: {
            type: "object"
        }
        }
    } 
};

export const Desktop = {
    args: {
        items: items,
        footerInfo: footerInfo
    }
};
