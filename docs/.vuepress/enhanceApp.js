
// import FspaceUI from '../../packages'
import FsInput from '../../packages/src/input/input'
import FsRadio from '../../packages/src/radio/radio'
import FsBUtton from '../../packages/src/button/button'
 
export default ({
  Vue
}) => {
  Vue.component(FsInput.name, FsInput)
  Vue.component(FsRadio.name, FsRadio)
  Vue.component(FsBUtton.name, FsBUtton)
}