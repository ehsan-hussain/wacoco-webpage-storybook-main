import ServicesPage from './ServicesPage';
import {items, footerInfo} from '../../../data/data';


export default {
    title: 'main_ui/Pages/ServicesPage',
    component: ServicesPage,
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