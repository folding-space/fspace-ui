import { Component, Vue, Prop, Provide } from "vue-property-decorator"
import "./row.scss"
import { VNode } from "vue/types/umd"

@Component
export default class FsRow extends Vue {

  private render(h: any): VNode {
    const { $slots, $attrs } = this
    return (
      <div class="fs-row">
        {$slots.default}
      </div>
    )
  }
}
