import WorkFlowPro from '../WorkFlowPro/WorkFlowPro4';

export default {
    title: 'main_ui/Pages/WorkFlowPro4',
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
