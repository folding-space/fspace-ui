import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
import Mixins from '../mixins/index'
import AsyncValidator from 'async-validator'
import './form-item.scss'

interface rule {
  message?: string,
  required?: boolean,
  trigger?: string
}

@Component({
  mixins: [Mixins]
})
export default class FsFormItem extends Vue {

  @Inject()
  form!: any;

  private dispatch!: Function

  @Prop({ type: String, required: false, default: '' })
  private readonly prop!: string;

  @Prop({ type: String, required: false, default: '' })
  private readonly label!: string;

  private isRequired: boolean = false

  private validateState: string = ''

  private validateMessage: string = ''

  private mounted() {
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

  private get filedValue() {
    return this.form.model[this.prop]
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
      // cb(this.validateState, this.validateMessage)
    })
  }

  onFiledChange() {
    this.validate('change', (state: string, msg: string) => {
      console.log(state)
    })
  }

  onFiledBlur() {
    this.validate('blur', () => {

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