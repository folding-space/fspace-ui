import FsInput from './src/input/input'
import FsButton from './src/button/button'
import FsForm from './src/form/form'
import FsFormItem from './src/form-item/form-item'
import FsRadio from './src/radio'
import FsRadioGroup from './src/radio-group'
import FsRadioButton from './src/radio-button'
import FsCheckbox from './src/checkbox'
import FsCheckboxGroup from './src/checkbox-group'
import FsRow from './src/layout/row/row'
import FsCol from './src/layout/col/col'
import FsDrawer from './src/drawer/drawer'
import FsDialog from './src/dialog/dialog'
import FsCarousel from './src/carousel/carousel'

const components = [
    FsInput,
    FsForm,
    FsFormItem,
    FsButton,
    FsRadioGroup,
    FsRadio,
    FsRadioButton,
    FsCheckbox,
    FsCheckboxGroup,
    FsRow,
    FsDialog,
    FsCol,
    FsDrawer,
    FsCarousel,
    
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
    FsRadioButton,
    FsCheckbox,
    FsCheckboxGroup,
    FsRow,
    FsCol,
    FsDialog,
    FsDrawer,
    FsCarousel,
};
