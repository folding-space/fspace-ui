import {Vue, Component, Prop } from 'vue-property-decorator';
import './input.scss'
import { VNode } from 'vue/types/umd';
import makeExpandingArea  from './makeExpandingArea/index'
import Mixins from '../mixins/index'


@Component({
  mixins: [Mixins]
})
export default class FsInput extends Vue {

  private dispatch!: Function

  @Prop({ type: String, required: false, default: 'text' })
  private readonly type!: string;

  @Prop({ type: Boolean, required: false, default: false })
  private readonly disabled!: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  private readonly readonly!: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  private readonly autosize!: boolean;

  @Prop({ type: String, required: false, default: '请输入内容' })
  private readonly placeholder!: string;

  @Prop({ type: Boolean, required: false, default: false })
  private readonly clearable!: boolean;

  @Prop({ type: Number, required: false, default: -1 })
  private readonly maxlength!: number;

  @Prop({ type: Number, required: false, default: -1 })
  private readonly minlength!: number;

  @Prop({ type: Boolean, required: false, default: false })
  private readonly showPassword!: boolean;

  @Prop({ type: Number, required: false, default: 3 })
  private readonly rows!: number;

  @Prop({ type: Number, required: false, default: 80 })
  private readonly cols!: number;

  private innerValue = '';

  private focused = false;

  private showClear = false;

  private showPsd = false;

  private created() {
    this.innerValue = this.$attrs.value;
  }

  private get inputDisabled(): boolean {
    return this.disabled;
  }

  private get inputShowPassword(): boolean {
    return this.type == 'password' && this.showPassword
  }

  private mounted() {
    if (this.autosize) {
      makeExpandingArea(this.$refs.textarea)
    }
  }

  private onInput(e: Event) {
    const { value = '' }: any = e.target || {};
    this.innerValue = value;
    this.setShowClear();
    this.$emit('input', this.innerValue);
    this.dispatch('FsFormItem', 'on-form-change', value)
  }

  private onFocus(e: Event) {
    this.focused = true;
    this.setShowClear();
    this.$emit('focus', e);
  }

  private onBlur(e: Event) {
    this.focused = false;
    this.setShowClear();
    this.$emit('blur', e);
  }

  private onClear() {
    this.innerValue = '';
    this.focused = false;
    this.setShowClear();
    this.$emit('input', this.innerValue);
  }

  private onShowPassword() {
    this.showPsd = !this.showPsd;
  }

  private setShowClear() {
    this.showClear = this.clearable && this.focused && !!this.innerValue && !this.readonly && !this.showPassword
  }

  private rIcon(t: string): string {
   return `fs-input__inner-icon icon iconfont icon-icon-test${t}`
  }

  private rSpan(type: string): VNode | null {
      return (
        <div>
          { this.showClear ? <span class={ this.rIcon('44') } onmousedown={this.onClear} /> : null  } 
          { this.inputShowPassword ?  <span class={ this.rIcon(this.showPsd ? '1' : '')} onmousedown={this.onShowPassword} /> : null } 
          { type == 'textarea' && this.maxlength > 0 ? <span class="fs-textarea__count"> {this.innerValue.length} / {this.maxlength} </span> : null}
        </div>
      )
  }

  private rInput(): VNode {
    return (
      <div class='fs-input'>
        <input
          class='fs-input__inner'
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
        { this.rSpan('input') }
      </div>
    );
  }

  private rTextarea(): VNode {
    return (
      <div class='fs-textarea'>
        <textarea
          ref="textarea"
          class='fs-textarea__inner'
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
        { this.rSpan('textarea') }
      </div>
    )
  }

  private render() {
    if (this.type == 'textarea') {
      return this.rTextarea()
    }
    return this.rInput()

  }
} 