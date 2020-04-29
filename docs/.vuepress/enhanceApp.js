
// import FspaceUI from '../../packages'
import FsInput from '../../packages/src/input/input'
import FsRadio from '../../packages/src/radio/radio'
import FsRadioGroup from '../../packages/src/radio/radio-group'
import FsRadioButton from '../../packages/src/radio/radio-button'
import FsButton from '../../packages/src/button/button'
import FsForm from '../../packages/src/form/form'
import FsFormItem from '../../packages/src/form-item/form-item'
import FsCheckbox from '../../packages/src/checkbox'
import FsCheckboxGroup from '../../packages/src/checkbox/checkbox-group'

import FspaceUI from '../../packages/index'
import { useTheme, addTheme, addCreateTheme } from '../../packages/src/theme/theme'

export default ({
  Vue
}) => {
  // 
  Vue.use(FspaceUI)
  // 自定义主题
  // addTheme('teal', {
  //   default: '#fff',
  //   primary: '#009688',
  //   secondary: '#ff4081',
  //   success: '#4caf50',
  //   warning: '#ffeb3b',
  // }, 'light');
  // 主题样式扩展
  // addCreateTheme((theme) => {
  //   return `
  //   .fs-radio {
  //     color: ${theme.text.warning}
  //   }
  //   `
  // })
  // 切换主题
  useTheme('light')
  // Vue.component(FsInput.name, FsInput)
  // Vue.component(FsRadio.name, FsRadio)
  // Vue.component(FsRadioGroup.name, FsRadioGroup)
  // Vue.component(FsRadioButton.name, FsRadioButton)
  // Vue.component(FsButton.name, FsButton)
  // Vue.component(FsForm.name, FsForm)
  // Vue.component(FsFormItem.name, FsFormItem)
}