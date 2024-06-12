import LandingPageFinal from "./LandingPageFinal";
import { headerInfo } from "../../../data/data";
import { slides } from "../../../data/data";
import { teamMembersInfo } from "../../../data/data";
import { footerInfo } from "../../../data/data";
//import { items } from "../../../data/data";


export default {
    title: "main-ui/Pages/LandingPageFinal",
    component: LandingPageFinal,
    args: {
        items: {control: 'array'},
        slides: {control: 'array'},
        teamMembersInfo: {control: 'array'},
        footerInfo: {control: 'array'},
        
    }
};

export const Template = {
    args: {
        items: headerInfo,
        slides: slides,
        teamMembersInfo: teamMembersInfo,
        footerInfo: footerInfo,
        
    }
};