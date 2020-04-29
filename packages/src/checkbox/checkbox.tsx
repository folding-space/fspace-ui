import { Component, Vue, Prop, Inject } from 'vue-property-decorator';
import './checkbox.scss'
@Component
export default class FsCheckbox extends Vue {
    @Prop({ type: [String, Number, Boolean], required: false, default: '' })
    private readonly label!: string;

    @Prop({ type: Boolean, required: false, default: false })
    private readonly value!: boolean;

    @Prop({ type: String, required: false, default: '' })
    private readonly name!: string;

    @Prop({ type: Boolean, required: false, default: false })
    private readonly disabled!: boolean;

    private get className(): string {
        let cName: string = 'fs-checkbox'
        if (this.$parent.$attrs.value ? this.$parent.$attrs.value.includes(this.label) : this.model) {
            cName = cName + " is-checked"
        }
        if (this.disabled) {
            cName = cName + " is-disabled"
        }
        return cName
    }

    private get checkboxDisabled(): boolean {
        return this.disabled;
    }

    public get model(): any {
        // return this.value
        return this.$parent.$attrs.value || this.$parent.$attrs.value == '' ? this.$parent.$attrs.value : this.value
    }

    public set model(v: any) {
        this.$emit('input', v);
        this.$parent.$attrs.value || this.$parent.$attrs.value == '' ? this.$parent.$emit('input', v) : this.$emit('input', v)
    }

    private isCheckboxGroup(): any {
        return this.$parent.$attrs.value ? this.$parent.$attrs.value.includes(this.label) : this.model
    }


    private render() {
        return (
            <label class={this.className}>
                <span class="fs-checkbox__input">
                    <span class="fs-checkbox__inner"></span>
                    <input type="checkbox" class="fs-checkbox__original" disabled={this.checkboxDisabled} name={this.name} v-model={this.model} value={this.label}></input>
                </span>
                <span class="fs-checkbox__label">
                    {this.$slots.default ? this.$slots.default : this.label}
                </span>
            </label>
        )
    }
}