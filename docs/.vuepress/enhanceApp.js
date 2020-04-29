
// import FspaceUI from '../../packages'
import FsInput from '../../packages/src/input/input'
import FsRadio from '../../packages/src/radio/radio'
import FsRadioGroup from '../../packages/src/radio/radio-group'
import FsRadioButton from '../../packages/src/radio/radio-button'
import FsButton from '../../packages/src/button/button'
import FsForm from '../../packages/src/form/form'
import FsFormItem from '../../packages/src/form-item/form-item'
import FsDialog from '../../packages/src/dialog/dialog'
import '../../packages/assets/icon/iconfont'

export default ({
  Vue
}) => {
  Vue.component(FsInput.name, FsInput)
  Vue.component(FsRadio.name, FsRadio)
  Vue.component(FsRadioGroup.name, FsRadioGroup)
  Vue.component(FsRadioButton.name, FsRadioButton)
  Vue.component(FsButton.name, FsButton)
  Vue.component(FsForm.name, FsForm)
  Vue.component(FsFormItem.name, FsFormItem)
  Vue.component(FsDialog.name, FsDialog)
}
