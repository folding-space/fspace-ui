import FsInput from './src/input'

const components = [
    FsInput
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
    FsInput
};