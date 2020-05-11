// import { Component, Vue, Prop } from 'vue-property-decorator';
// import './button.scss'
// import { addCreateTheme } from '../../../packages/src/theme/theme'
// import ButtonTheme from './theme'
// addCreateTheme(ButtonTheme);

// @Component
// export default class FsButton extends Vue {

//   @Prop({ type: String, required: false, default: 'default' })
//   private readonly type!: String

//   @Prop({ type: Boolean, required: false, default: false })
//   private readonly disabled!: boolean;

//   @Prop({ type: Boolean, required: false, default: false })
//   private readonly flat!: boolean;

//   @Prop({ type: String, required: false, default: '' })
//   private readonly icon!: boolean;

//   @Prop({ type: Boolean, required: false, default: false })
//   private readonly loading!: boolean;

//   @Prop({ type: Boolean, required: false, default: true })
//   private readonly right!: boolean;

//   @Prop({ type: Boolean, required: false, default: false })
//   private readonly left!: boolean;

//   private get buttonDisable.value(): boolean {
//     return this.disabled;
//   }

//   private get load(): boolean {
//     return this.loading
//   }

//   private get leftIcon(): boolean {
//     if(this.left) return true
//     if(this.right) return false
//   }

//   private click() {
//     this.$emit('click');
//   }

//   private render() {
//     const { $slots } = this;
//     let btnText = $slots.default && $slots.default[0].text || ''
//     return (
//       <button
//         class={'fs-button ripple fs-button__'+this.type+' '+(this.icon && 'is-icon')+' '+(this.flat&&'fs-flat')}
//         disabled={this.buttonDisable.value || this.load}
//         onClick={this.click}
//       >
//         { this.load && <div class="icon-rotate"><span class="icon iconfont icon-icon-test41"></span></div> }
//         { this.icon && this.leftIcon && <div class="iconMargin"><span class={'icon iconfont'+' '+ this.icon}></span></div> }
//         { btnText }
//         { this.icon && !this.leftIcon && <div class="iconMargin"><span class={'icon iconfont'+' '+ this.icon}></span></div> }
//       </button>
//     )
//   }

// }

import { defineComponent, computed, onMounted, PropType, Ref, ref } from '@vue/composition-api';
import { VNode } from 'vue/types/umd';
import { PropTypes } from '../utils/vue-types'
import './button.scss'
import { addCreateTheme } from '../../../packages/src/theme/theme'
import ButtonTheme from './theme'
addCreateTheme(ButtonTheme);



const buttonProps = {
  type: {
    type: String,
    default: 'default'
  },
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  right: PropTypes.bool,
  left: PropTypes.bool,
}

export default defineComponent({
  name: 'FsButton',
  props: {
    ...buttonProps
  },
  setup(props, { emit, attrs, slots }) {

    const buttonDisable = computed((): boolean => {
      return props.disabled || false
    })

    const load = computed((): boolean => {
      return props.loading || false
    })

    const leftIcon = computed((): boolean => {
      if(props.right) return false
      return true
    })

    const btnText = computed((): string => {
      return slots.default && slots.default()[0].text || ''
    })

    const click = (e: Event) => {
      emit('click', e)
    }

    const fsButton = (): VNode => {
      
      return  <button
          class={'fs-button ripple fs-button__'+props.type+' '+(props.icon && 'is-icon')+' '+(props.flat&&'fs-flat')}
          disabled={buttonDisable.value || load.value}
          onClick={click}
        >
          { load.value && <div class="icon-rotate"><span class="icon iconfont icon-icon-test41"></span></div> }
          { props.icon && leftIcon && <div class="iconMargin"><span class={'icon iconfont'+' '+ props.icon}></span></div> }
          { btnText.value }
          { props.icon && !leftIcon && <div class="iconMargin"><span class={'icon iconfont'+' '+ props.icon}></span></div> }
        </button>
      
    }

    return () => {
      return fsButton()
    }

  }
})