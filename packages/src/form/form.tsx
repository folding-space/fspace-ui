import { Component, Vue, Prop } from 'vue-property-decorator';
import './form.scss'
import { VNode } from 'vue/types/umd';

interface rule {
    required?: string
    message?: string
    trigger?: string
    validator?: Function
}

@Component
export default class FsForm extends Vue {

    @Prop({ type: String, required: false, default: 'horizontal' })
    private readonly layout!: string;

    @Prop({ type: Object, required: true })
    private readonly model!: object;

    @Prop({ type: Array, required: true })
    private readonly rules!: Array<rule>;

    private validate() {

    }

    private render(h): VNode {
        const { $slots, $attrs } = this;
        return h('form', {
            attrs: {
                ...$attrs
            },
            prop: {
                rule: this.rules
            },
            on: {
                submit: (e: Event) => this.$emit('submit', e),
            }
        }, $slots.default)
    }

}