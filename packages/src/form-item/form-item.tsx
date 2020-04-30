import { Component, Vue, Prop, Inject, ProvideReactive } from 'vue-property-decorator';
import { PropTypes } from '../utils/vue-types'
import Mixins from '../mixins/index'
import AsyncValidator from 'async-validator'
import './form-item.scss'

interface rule {
  message?: string,
  required?: boolean,
  trigger?: string
}


const formItemProps = Vue.extend({
  mixins: [
    Mixins
  ],
  props: {
    prop: PropTypes.string,
    label: PropTypes.string
  }
});

const key = Symbol()

@Component
export default class FsFormItem extends formItemProps {

  @ProvideReactive('123123') private formItemValidateState = false

  @Inject() form!: any;

  private dispatch!: Function

  private isRequired: boolean = false

  private validateState: string = ''

  private validateMessage: string = ''

  private get filedValue() {
    return this.form.model[this.prop]
  }

  private mounted() {
    console.log(this)
    if (this.prop) {
      this.dispatch('FsForm', 'on-form-item-add', this)

      this.setRules()
    }
  }

  private setRules() {
    const rules = this.getCurrentRule()
    if (rules.length > 0) {
      rules.every((rule: rule) => {
        this.isRequired = rule.required;
      });
    }

    this.$on('on-form-change', this.onFiledChange)
    this.$on('on-form-blur', this.onFiledBlur)
  }

  private getCurrentRule() {
    const formRules = this.form.rules
    let rules = formRules ? formRules[this.prop] : []
    return rules
  }

  private beforeDestroy() {
    this.dispatch('FsForm', 'on-form-item-destroy', this)
  }

  private validate(_trigger: any, cb: Function) {
    const rules = this.getCurrentRule()

    if (rules.length === 0) return true
    
    let desc = {
      [this.prop]: rules
    }
    const validator = new AsyncValidator(desc)
    let model = {
      [this.prop]: this.filedValue
    }
    // @ts-ignore
    validator.validate(model, { firstFields: true }, err => {
      this.validateState = err ? 'error' : 'success'
      this.validateMessage = err ? err[0].message : ''
      
      // @ts-ignore
      cb(this.validateState, this.validateMessage)
    })
  }

  onFiledChange() {
    this.validate('change', (state: string, msg: string) => {
      this.formItemValidateState = state == 'error' 
    })
  }

  onFiledBlur() {
    this.validate('blur', (state: string, msg: string) => {
      this.formItemValidateState = state == 'error' 
    })
  }

  resetFiled() {
    this.validateState = ''
    this.validateMessage = ''
  }

  private render() {
    const { $slots, $props } = this
    return (
      <div class="fs-form-item">
        <div class="fs-form-item__content">
          {this.label !== '' ? <label class="fs-form-item__content-label">{this.label}</label> : null}
          {this.$slots.default}
        </div>
        { this.validateState == 'error' ? <span class="fs-form-item__error">{ this.validateMessage }</span> : null } 
      </div>
    )
  }

}