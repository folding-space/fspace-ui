import { Component, Vue, Prop , Provide } from 'vue-property-decorator';
@Component
export default class FsCheckboxGroup extends Vue {
    private render() {
        return (
            <div class="fs-radio-group">
                {this.$slots.default}
            </div>
        )
    }
}