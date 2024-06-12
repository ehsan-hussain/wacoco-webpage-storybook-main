import WorkFlowPro from '../WorkFlowPro/WorkFlowPro';

export default {
    title: 'main_ui/Pages/WorkFlowPro1',
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
