import { defineComponent, computed, onMounted, PropType, Ref, ref } from '@vue/composition-api';
import { VNode } from 'vue/types/umd';
import "./row.scss"
import { addCreateTheme } from '../../../../packages/src/theme/theme'
import RowTheme from './theme'
addCreateTheme(RowTheme);

const fsRowProps = {
  justifyContent: {
    type: String,
    default: ''
  },
  alignItems: {
    type: String,
    default: ''
  },
  wrap: {
    type: String,
    default: ''
  }
}

export default defineComponent ({
  name: 'FsRow',
  props: {
    ...fsRowProps
  },
  setup(props, { emit, attrs, slots }) {

    onMounted(() => {
      console.log(attrs,slots)
    })

    const fsRow = (): VNode => {
      return <div class={"fs-row"+' jc'+props.justifyContent+' ai'+props.alignItems+' '+props.wrap}>
          {slots.default()}
        </div>
    }

    return () => {
      return fsRow()
    }

  }
})
