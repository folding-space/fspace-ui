
// import FspaceUI from '../../packages'
import FsInput from '../../packages/src/input/input'
import FsBUtton from '../../packages/src/button/button'
import FsTag from '../../packages/src/tag/tag'
 
export default ({
  Vue
}) => {
  Vue.component(FsInput.name, FsInput)
  Vue.component(FsBUtton.name, FsBUtton)
  Vue.component(FsTag.name, FsTag)
}