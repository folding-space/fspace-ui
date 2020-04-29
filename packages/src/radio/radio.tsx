import { Component, Vue, Prop , Inject } from 'vue-property-decorator';
import './radio.scss'

@Component
export default class FsRadio extends Vue {
    @Prop({ type: [String, Number, Boolean], required: false, default: '' })
    private readonly label!: string;

    @Prop({ type: [String, Number], required: false, default: '' })
    private readonly value!: string;

    @Prop({ type: Boolean, required: false, default: false })
    private readonly disabled!: boolean;

    @Prop({ type: String, required: false, default: '' })
    private readonly name!: string;

    private get className(): string {
        let cName: string = 'fs-radio'
        if (this.label == this.model) {
            cName = cName + " is-checked"
        }
        if (this.disabled) {
            cName = cName + " is-disabled"
        }
        return cName
    }

    private get radioDisabled(): boolean {
        return this.disabled;
    }

    private created() {
    }

    public get model(): any {
        return this.$parent.$attrs.value||this.$parent.$attrs.value==''?this.$parent.$attrs.value: this.value
    }

    public set model(v: any) {
        this.$emit('input', v);
        this.$parent.$attrs.value||this.$parent.$attrs.value==''?this.$parent.$emit('input',v):this.$emit('input', v)
    }

    private handleChange() {
        this.$nextTick(() => {
          this.$emit('change', this.model);
        });
      }

    private render() {
        return (
            <label class={this.className}>
                <span class={this.radioDisabled ? "fs-radio__input is-disabled" : "fs-radio__input"}>
                    <span class="fs-radio__inner"></span>
                    <input class="fs-radio__original" disabled={this.radioDisabled} onChange={this.handleChange} type="radio" value={this.label} name={this.name} v-model={this.model} />
                </span>
                <span class="fs-radio__label">
                    {this.$slots.default ? this.$slots.default : this.label}
                </span>
            </label>
        )
    }
}