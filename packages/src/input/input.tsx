import { Component, Vue, Prop } from 'vue-property-decorator';
import './input.scss'

@Component
export default class FsInput extends Vue {

  @Prop({ type: String, required: false, default: 'text' })
  private readonly type!: string;

  @Prop({ type: Boolean, required: false, default: false })
  private readonly disabled!: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  private readonly readonly!: boolean;

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

  private onInput(e: Event) {
    const { value = '' }: any = e.target || {};
    this.innerValue = value;
    this.setShowClear();
    this.$emit('input', this.innerValue);
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

  private render() {
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
        {this.showClear ? <span class="fs-input__inner-clear-icon icon iconfont icon-icon-test44" onmousedown={this.onClear} /> : ''}
        {this.inputShowPassword ? <span class={this.showPsd ? 'fs-input__inner-clear-icon icon iconfont icon-icon-test1' : 'fs-input__inner-clear-icon icon iconfont icon-icon-test'} onmousedown={this.onShowPassword} /> : ''}
      </div>
    );
  }
} 