import WorkFlowPro from '../WorkFlowPro/WorkFlowPro3';

export default {
    title: 'main_ui/Pages/WorkFlowPro3',
    component: WorkFlowPro,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        items: {
            control: {
                type: 'array'
            }
        },
        footerInfo: {
            control: {
                type: 'object'
            }
        }
    }
}

export const Desktop = {};
