import FsInput from './src/input'
import FsForm from './src/form'
import FsFormItem from './src/form-item'

const components = [
    FsInput,
    FsForm,
    FsFormItem
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
    FsInput,
    FsForm,
    FsFormItem
};