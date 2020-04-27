import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
import Mixins from '../mixins/index'
import AsyncValidator from 'async-validator'
import './form-item.scss'

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
            this.dispatch('lForm', 'on-form-item-add', this)

            this.setRules()
        }
    }

    private setRules() {
        const rules = this.getCurrentRule()
        if (rules.length > 0) {
            rules.every((rule: any) => {
                // 如果当前校验规则中有必填项，则标记出来
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
        this.dispatch('lForm', 'on-form-item-destroy', this)
    }

    private get filedValue() {
        return this.form.model[this.prop]
    }

    private validate(_trigger: any, cb = () => { }) {
        const rules = this.getCurrentRule()

        if (rules.length === 0) return true

        // 使用async validator验证规则
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
            cb(this.validateMessage)
        })

    }

    onFiledChange() {
        this.validate('change')
    }

    onFiledBlur() {
        this.validate('blur')
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
                <span class="fs-form-item__error">错误提示</span>
            </div>
        )
    }

}