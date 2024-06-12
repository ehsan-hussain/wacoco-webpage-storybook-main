import WorkFlowStudent4 from './WorkFlowStudent4'

export default {
    title: 'main_ui/Pages/WorkFlowStudent4',
    component: WorkFlowStudent4,
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
