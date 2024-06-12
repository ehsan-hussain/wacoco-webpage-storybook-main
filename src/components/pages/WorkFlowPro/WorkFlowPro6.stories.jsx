import WorkFlowPro from '../WorkFlowPro/WorkFlowPro6';

export default {
    title: 'main_ui/Pages/WorkFlowPro6',
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
