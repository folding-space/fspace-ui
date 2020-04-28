import { Component, Vue, Prop , Provide } from 'vue-property-decorator';
import './radio.scss'

@Component
export default class FsRadioGroup extends Vue {
   private created() {
    }
    private render() {
        return (
            <div class="el-radio-group">
                {this.$slots.default}
            </div>
        )
    }
}