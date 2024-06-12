import WorkFlowStudent5 from './WorkFlowStudent5'

export default {
    title: 'main_ui/Pages/WorkFlowStudent5',
    component: WorkFlowStudent5,
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

export const Desktop = {}
