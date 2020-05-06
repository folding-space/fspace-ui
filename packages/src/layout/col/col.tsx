import { Component, Vue, Prop } from 'vue-property-decorator';
import './col.scss'

@Component
export default class FsCol extends Vue {

  @Prop({ type: Number, required: true, default: 24})
  private readonly span!: number

  private render() {
    const { $slots, $props } = this
    return (
      <div style={'flex:'+this.span} class="fs-col">
        {$slots.default}
      </div>
    )
  }

}