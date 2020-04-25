import { Component, Vue, Prop } from 'vue-property-decorator';
import './form-item.scss'

@Component
export default class FsFormItem extends Vue {

    @Prop({ type: String, required: false, default: '' })
    private readonly prop!: string;

    @Prop({ type: String, required: false, default: '' })
    private readonly label!: string;

    private mounted() {
        this.$on('on-form-change', this.onFiledChange)
        this.$on('on-form-blur', this.onFiledBlur)
    }


    private onFiledChange() {

    }

    private onFiledBlur() {

    }

    private render() {

        const { $slots, $props } = this

        return (
            <div>
                {this.label !== '' ? <label>{this.label}</label> : null}
                {this.$slots.default}
            </div>
        )
    }

}