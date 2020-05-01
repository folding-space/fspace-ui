import FspaceUI from '../../packages/index'
import VueCompositionApi from '@vue/composition-api';
import { useTheme, addTheme, addCreateTheme } from '../../packages/src/theme/theme'

export default ({
  Vue
}) => {
  Vue.use(VueCompositionApi);
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
}
