import FsInput from './src/input/input'
import FsButton from './src/button/button'

import FsForm from './src/form/form'
import FsFormItem from './src/form-item'
import FsRadio from './src/radio'
import FsRadioGroup from './src/radio-group'
import FsRadioButton from './src/radio-button'

const components = [
    FsInput,
    FsButton,
    FsForm,
    FsFormItem,
    FsRadioGroup,
    FsRadio,
    FsRadioButton
]

const install: any = function (Vue: any) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    FsButton,
    FsInput,
    FsForm,
    FsFormItem,
    FsRadioGroup,
    FsRadio,
    FsRadioButton
};