import { Component, Vue, Prop, Provide } from 'vue-property-decorator';

import './form.scss'
import { VNode } from 'vue/types/umd';

@Component
export default class FsForm extends Vue {

  

    @Prop({ type: String, required: false, default: 'horizontal' })
    private readonly layout!: string;

    @Prop({ type: Object, required: false })
    private readonly model!: object;

    @Prop({ type: Object, required: false })
    private readonly rules!: object;

    @Provide() public form: object = {
        model: this.model,
        rules: this.rules
    }

    private fileds: any = []


    private created() {
        console.log(this.$attrs)
        this.$on('on-form-item-add', (filed: any) => {
            console.log('form-item-add')
            if (filed)
                this.fileds.push(filed)
        })

        this.$on('on-form-item-destroy', (filed: any) => {
            console.log('form-item-destroy')
            if (filed.prop)
                this.fileds.splice(this.fileds.indexOf(filed), 1)
        })
    }

    private resetFileds() {
        this.fileds.forEach((filed: any) => {
            filed.resetFileds()
        })
    }

    private validate(cb: Function) {
        let isValid = true
        let counter: number = 0
        this.fileds.forEach((filed: any) => {
            filed.validate('', (err: any) => {
                if (err) {
                    isValid = false
                }

                counter++
                if (counter === this.fileds.length) {
                    cb(isValid)
                }
            })
        })
    }

    private render(h: any): VNode {
        const { $slots, $attrs } = this

        return <form>
            {$slots.default}
        </form>
    }

}