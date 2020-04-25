
// import FspaceUI from '../../packages'
import FsInput from '../../packages/src/input/input'
import FsRadio from '../../packages/src/radio/radio'
 
export default ({
  Vue
}) => {
  Vue.component(FsInput.name, FsInput)
  Vue.component(FsRadio.name, FsRadio)
}