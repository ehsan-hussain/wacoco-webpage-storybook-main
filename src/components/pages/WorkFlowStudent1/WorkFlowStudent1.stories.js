import WorkFlowStudent1 from './WorkFlowStudent1'

export default {
    title: 'main_ui/Pages/WorkFlowStudent1',
    component: WorkFlowStudent1,
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
