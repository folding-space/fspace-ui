import { defineComponent, computed, onMounted, PropType, Ref, ref, toRefs, toRef} from '@vue/composition-api';
import classNames from 'classnames';
import { VNode } from 'vue/types/umd';
import { PropTypes } from '../utils/vue-types'
import makeExpandingArea from './makeExpandingArea'
import './input.scss'


const inputProps = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  autosize: PropTypes.bool,
  placeholder: PropTypes.string,
  clearable: PropTypes.bool,
  maxlength: PropTypes.number,
  minlength: PropTypes.number,
  showPassword: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
}

export default defineComponent({
  name: 'FsInput',
  props: {
    ...inputProps
  },
  setup(props, { emit, attrs }) {

    const textarea = ref(null);

    let innerValue: Ref<string> = ref('')

    let focused: Ref<boolean> = ref(false)

    let showClear: Ref<boolean | undefined> = ref(false)

    let showPsd: Ref<boolean> = ref(false)

    const inputShowPassword = computed((): boolean => {
      return (props.type == 'password' && props.showPassword) || false
    })

    const inputDisabled = computed((): boolean => {
      return props.disabled || false;
    })

    const validateState = computed((): boolean => {
      return false
    })

    onMounted(() => {
      innerValue.value = attrs.value;
      if (props.autosize) {
        makeExpandingArea(textarea.value)
      }
    })

    const onInput = (e: InputEvent) => {
      const { value = '' }: any = e.target || {};
      innerValue.value = value;
      setShowClear();
      emit('input', innerValue.value);
      // dispatch('FsFormItem', 'on-form-change', value)
    }

    const onFocus = (e: Event) => {
      focused.value = true;
      setShowClear();
      emit('focus', e);
    }

    const onBlur = (e: Event) => {
      focused.value = false;
      setShowClear();
      emit('blur', e);
    }

    const onClear = () => {
      innerValue.value = '';
      focused.value = false;
      setShowClear();
      emit('input', innerValue.value);
    }

    const onShowPassword = () => {
      showPsd.value = !showPsd.value;
    }

    const setShowClear = () => {
      showClear.value = props.clearable && focused.value && !!innerValue.value && !props.readonly && !props.showPassword
    }


    const getClassName = (type: string, child: string = ''): string => {
      const prefix = `fs-${type}${child}`
      return classNames(prefix, {
        [`${prefix}-error`]: this
      })
    }

    const getClassIcon = (icon: string): string => {
      const prefix = 'fs-input'
      return classNames({
        [`${prefix}__inner-icon`]: true,
        [`icon iconfont icon-icon-test${icon}`]: true
      })
    }

    const rSpan = (type: string): VNode | null => {
      return (
        <div>
          {showClear.value ? <span class={getClassIcon('44')} onmousedown={onClear} /> : null}
          {inputShowPassword.value ? <span class={getClassIcon(showPsd.value ? '1' : '')} onmousedown={onShowPassword} /> : null}
          {type == 'textarea' && props.maxlength > 0 ? <span class="fs-textarea__count"> {innerValue.value.length} / {props.maxlength} </span> : null}
        </div>
      )
    }

    const rInput = (): VNode => {
      return (
        <div class={getClassName('input')}>
          <input
            class={getClassName('input', '__inner')}
            v-model={innerValue.value}
            maxlength={props.maxlength}
            minlength={props.minlength}
            disabled={inputDisabled.value}
            placeholder={props.placeholder}
            readonly={props.readonly}
            type={props.type == 'password' ? showPsd.value ? 'text' : props.type : props.type}
            onInput={onInput}
            onFocus={onFocus}
            onBlur={onBlur}
          >
          </input>
          {rSpan('input')}

        </div>
      );
    }

    const rTextarea = (): VNode => {
      return (
        <div class={getClassName('textarea')}>
          <textarea
            ref="textarea"
            class={getClassName('textarea', '__inner')}
            v-model={innerValue.value}
            maxlength={props.maxlength}
            minlength={props.minlength}
            disabled={inputDisabled.value}
            placeholder={props.placeholder}
            readonly={props.readonly}
            type='textarea'
            onInput={onInput}
            onFocus={onFocus}
            onBlur={onBlur}
            rows={props.rows}
            cols={props.cols}
          >
          </textarea>
          {rSpan('textarea')}
        </div>
      )
    }

    return () => {
      if (props.type == 'textarea') {
        return rTextarea()
      }
      return rInput();
    };
  },
});
