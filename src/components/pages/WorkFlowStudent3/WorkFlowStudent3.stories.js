import WorkFlowStudent3 from './WorkFlowStudent3'

export default {
    title: 'main_ui/Pages/WorkFlowStudent3',
    component: WorkFlowStudent3,
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
