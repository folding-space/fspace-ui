import { Component, Vue, Prop,  } from 'vue-property-decorator';
import Mixins from '../mixins/index'

import './input.scss'
import { VNode } from 'vue/types/umd';

let win: any = window

@Component({
  // mixins: [Mixins]
})
export default class FsInput extends Vue {

  private readonly dispatch!: Function;

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
      this.makeExpandingArea(this.$refs.textarea)
    }
  }

 

  private onInput(e: Event) {
    const { value = '' }: any = e.target || {};
    this.innerValue = value;
    this.setShowClear();
    this.$emit('input', this.innerValue);
    // this.dispatch('FsFormItem', 'on-form-change', value)
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

  private makeExpandingArea(el: Element | any) {
    let timer: number | null = null;

    let setStyle = function (el: Element | any, auto?: number | undefined) {
      if (auto) el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
    let delayedResize = function (el: Element) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(function () {
        setStyle(el)
      }, 200);
    }
    if (el.addEventListener) {
      el.addEventListener('input', function () {
        setStyle(el, 1);
      }, false);
      setStyle(el)
    } else if (el.attachEvent) {
      el.attachEvent('onpropertychange', function () {
        setStyle(el)
      })
      setStyle(el)
    }
    if (window.VBArray && window.addEventListener) { //IE9
      el.attachEvent("onkeydown", function () {
        let key = win.event.keyCode;
        if (key == 8 || key == 46) delayedResize(el);

      });
      el.attachEvent("oncut", function () {
        delayedResize(el);
      }); //处理粘贴
    }
  }

  private rIcon(t: string): string {
   return `fs-input__inner-icon icon iconfont icon-icon-test${t}`
  }

  private rSpan(type: string): VNode | null {
      return (
        <div>
          { this.showClear ? <span class={ this.rIcon('44') } onmousedown={this.onClear} /> : ''  } 
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