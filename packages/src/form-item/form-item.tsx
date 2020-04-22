import { Component, Vue, Prop } from 'vue-property-decorator';
import './form-item.scss'

@Component
export default class FsFormItem extends Vue {

    @Prop({ type: String, required: false, default: '' })
    private readonly prop!: string;

    @Prop({ type: String, required: false, default: '' })
    private readonly label!: string;

    private render() {

        const { $slots , $props} = this
        console.log($slots, $props)

        return (
            <form
            >
                {this.label !=='' ? <label>{ this.label }</label> : null} 
                {this.$slots.default}
            </form>
        )
    }

}