import PhotoSlider from "./PhotoSlider";
import { teamMembersInfo } from "../../data/data";

export default {
    title: "main_ui/AboutUs/PhotoSlider",
    component: PhotoSlider,
    argTypes: {
        teamMembersInfo: {
            control: {
                type: "array"
            }
        }
    }
};

export const Desktop = {
    teamMembersInfo: teamMembersInfo
};
