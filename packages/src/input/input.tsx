import { Vue, Component, InjectReactive } from 'vue-property-decorator';
// @ts-ignore
import classNames from 'classnames';
import './input.scss'
import { VNode } from 'vue/types/umd';
import { PropTypes } from '../utils/vue-types'
// @ts-ignore
import makeExpandingArea from './makeExpandingArea'
import Mixins from '../mixins/index'

const inputProps = Vue.extend({
  mixins: [
    Mixins
  ],
  props: {
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
  },
});

@Component
export default class FsInput extends inputProps {

  @InjectReactive('123123') formItemValidateState!: boolean

  dispatch!: Function

  innerValue = '';

  focused = false;

  showClear = false;

  showPsd = false;

  created() {
    this.innerValue = this.$attrs.value;
  }

  get inputDisabled(): boolean {
    return this.disabled;
  }

  get inputShowPassword(): boolean {
    return this.type == 'password' && this.showPassword
  }

  get validateState() {
    console.log(this.formItemValidateState)
    return this.formItemValidateState
  }

  mounted() {
    if (this.autosize) {
      makeExpandingArea(this.$refs.textarea)
    }
  }

  onInput(e: Event) {
    const { value = '' }: any = e.target || {};
    this.innerValue = value;
    this.setShowClear();
    this.$emit('input', this.innerValue);
    this.dispatch('FsFormItem', 'on-form-change', value)
  }

  onFocus(e: Event) {
    this.focused = true;
    this.setShowClear();
    this.$emit('focus', e);
  }

  onBlur(e: Event) {
    this.focused = false;
    this.setShowClear();
    this.$emit('blur', e);
  }

  onClear() {
    this.innerValue = '';
    this.focused = false;
    this.setShowClear();
    this.$emit('input', this.innerValue);
  }

  onShowPassword() {
    this.showPsd = !this.showPsd;
  }

  setShowClear() {
    this.showClear = this.clearable && this.focused && !!this.innerValue && !this.readonly && !this.showPassword
  }

  getClassName(type: string, child: string = ''): string {
    const prefix =  `fs-${type}${child}`
    return classNames(prefix, {
      [`${prefix}-error`]: this.validateState
    })
  }

  getClassIcon(icon: string) {
    const prefix = 'fs-input'
    return classNames({
      [`${prefix}__inner-icon`]: true,
      [`icon iconfont icon-icon-test${icon}`]: true
    })
  }

  rSpan(type: string): VNode | null {
    return (
      <div>
        {this.showClear ? <span class={this.getClassIcon('icon')} onmousedown={this.onClear} /> : null}
        {this.inputShowPassword ? <span class={this.getClassIcon(this.showPsd ? '1' : '')} onmousedown={this.onShowPassword} /> : null}
        {type == 'textarea' && this.maxlength > 0 ? <span class="fs-textarea__count"> {this.innerValue.length} / {this.maxlength} </span> : null}
      </div>
    )
  }

  rInput(): VNode {
    return (
      <div class={this.getClassName('input')}>
        <input
          class={ this.getClassName('input', '__inner')}
          v-model={this.innerValue}
          maxlength={this.maxlength}
          minlength={this.minlength}
          disabled={this.inputDisabled}
          placeholder={this.placeholder}
          readonly={this.readonly}
          type={this.type == 'password' ? this.showPsd ? 'text' : this.type : this.type}
          onInput={this.onInput}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
        </input>
        {this.rSpan('input')}

      </div>
    );
  }

  rTextarea(): VNode {
    return (
      <div class={this.getClassName('textarea')}>
        <textarea
          ref="textarea"
          class={ this.getClassName('textarea', '__inner') }
          v-model={this.innerValue}
          maxlength={this.maxlength}
          minlength={this.minlength}
          disabled={this.inputDisabled}
          placeholder={this.placeholder}
          readonly={this.readonly}
          type='textarea'
          onInput={this.onInput}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          rows={this.rows}
          cols={this.cols}
        >
        </textarea>
        {this.rSpan('textarea')}
      </div>
    )
  }

  render() {
    if (this.type == 'textarea') {
      return this.rTextarea()
    }
    return this.rInput()

  }
}
