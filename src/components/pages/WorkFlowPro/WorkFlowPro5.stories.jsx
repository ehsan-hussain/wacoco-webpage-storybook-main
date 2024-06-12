import WorkFlowPro from '../WorkFlowPro/WorkFlowPro5';

export default {
    title: 'main_ui/Pages/WorkFlowPro5',
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
