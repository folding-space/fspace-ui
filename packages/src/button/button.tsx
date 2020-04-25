import { Component, Vue, Prop } from 'vue-property-decorator';
import './button.scss'

@Component
export default class FsButton extends Vue {

  @Prop({ type: String, required: false, default: 'default' })
  private readonly type!: String

  @Prop({ type: Boolean, required: false, default: false })
  private readonly disabled!: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  private readonly flat!: boolean;

  @Prop({ type: String, required: false, default: '' })
  private readonly icon!: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  private readonly loading!: boolean;

  private disabledLoad:Boolean = false

  private get buttonDisabled(): boolean {
    return this.disabled;
  }

  private get load(): boolean {
    this.loading ? this.disabledLoad = true : this.disabledLoad = false
    return this.loading
  }

  private click() {
    this.$emit('click');
  }

  private render() {
    const { $slots } = this;
    let btnText = $slots.default && $slots.default[0].text || ''
    return (
      <button
        class={'fs-button ripple fs-button__'+this.type+' '+(this.icon && 'is-icon')+' '+(this.flat&&'fs-flat')}
        disabled={this.buttonDisabled || this.disabledLoad}
        onClick={this.click}
      >
        { this.load && <div class="icon-rotate"><span class="icon iconfont icon-icon-test41"></span></div> }
        { btnText }
        { this.icon && <span class={'icon iconfont'+' '+ this.icon}></span> }
      </button>
    )
  }

}