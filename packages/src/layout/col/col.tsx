import { defineComponent, computed, onMounted, PropType, Ref, ref } from '@vue/composition-api';
import { VNode } from 'vue/types/umd';
import { PropTypes } from '../../utils/vue-types'
import './col.scss'

const fsColProps = {
  span: {
    type: String,
    default: ''
  }
}

export default defineComponent ({
  name: 'FsCol',
  props: {
    ...fsColProps
  },
  setup(props, { emit, attrs, slots }) {

    const fsCol = (): VNode => {
      return  <div style={'flex:'+props.span} class="fs-col">
          {slots.default && slots.default()}
        </div>
    }

    return () => {
      return fsCol()
    }

  }
  // @Prop({ type: Number, required: true, default: 24})
  // private readonly span!: number

  // private render() {
  //   const { $slots, $props } = this
  //   return (
  //     <div style={'flex:'+this.span} class="fs-col">
  //       {$slots.default}
  //     </div>
  //   )
  // }

})