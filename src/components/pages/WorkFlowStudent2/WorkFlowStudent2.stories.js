import WorkFlowStudent2 from './WorkFlowStudent2'

export default {
    title: 'main_ui/Pages/WorkFlowStudent2',
    component: WorkFlowStudent2,
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
