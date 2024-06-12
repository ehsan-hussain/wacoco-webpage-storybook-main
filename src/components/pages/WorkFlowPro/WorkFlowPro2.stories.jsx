import WorkFlowPro from '../WorkFlowPro/WorkFlowPro2';

export default {
    title: 'main_ui/Pages/WorkFlowPro2',
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
