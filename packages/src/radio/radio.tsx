import { Component, Vue, Prop } from 'vue-property-decorator';
import './radio.scss'

@Component
export default class FsRadio extends Vue {
    @Prop({ type: [String, Number,Boolean], required: false, default: '' })
    private readonly label!: string;

    @Prop({ type: [String, Number], required: false, default: '' })
    private readonly value!: string;

    @Prop({ type: String, required: false, default: '' })
    private readonly name!: string;

    private innerValue: string = ''

    private created() {
        // console.log('saj ',this.value)
        // this.innerValue = this.value;
    }

    
    public get model(): any{
        return this.value
    }
    
    public set model(v : any) {
        // console.log('sdjasjs',v)
        this.$emit('input', v);
        // this.innerValue = v;
    }
    

    // private onInput(e: Event) {
    //     this.$emit('input', this.innerValue);
    // }

    private render() {
        return (
            <label class={this.label==this.value? 'fs-radio is-checked' : 'fs-radio'}>
                {this.innerValue}
                <span class="fs-radio__input">
                    <span class="fs-radio__inner"></span>
                    <input class="fs-radio__original" type="radio" value={this.label} name={this.name} v-model={this.model} />
                </span>
                <span class="fs-radio__label">
                    {this.$slots.default ? <slot>{this.$slots.default}</slot> : <span>{this.label}</span>}
                </span>

            </label>
        )
    }
}