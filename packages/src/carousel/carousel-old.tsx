import { Component, Vue, Prop, Watch } from "vue-property-decorator";
// @ts-ignore
import classNames from "classnames";
import { VNode } from "vue/types/umd";
import "./carousel.scss";

interface keyEvent {
  keyCode: number;
  key: string;
}

@Component
export default class FsCarousel extends Vue {
  /**
   * 是否是否自动切换
   */
  @Prop({ type: Boolean, required: false, default: false })
  private readonly autoplay!: boolean;

  /**
   * 是否显示面板指示点
   */
  @Prop({ type: Boolean, required: false, default: true })
  private dots!: boolean;

  /**
   * 是否允许跳转
   */
  @Prop({ type: Boolean, required: false, default: true })
  private allowJump!: boolean;

  /**
   * 面板指示点位置，可选 top bottom left right
   */
  @Prop({ type: String, required: false, default: "bottom" })
  private readonly dotPosition!: string;
  /**
   * 宽度
   */
  @Prop({ type: String, required: false, default: "800px" })
  private readonly carouselWidth!: string;
  /**
   * 高度
   */
  @Prop({ type: String, required: false, default: "400px" })
  private readonly carouselHeight!: string;

  /**
   * 面板指示点类名
   */
  @Prop({ type: String, required: false, default: "slick-dots" })
  private readonly dotsClass!: string;

  /**
   * 动画效果
   */
  @Prop({ type: String, required: false, default: "linear" })
  private easing!: string;

  /**
   * 动画效果函数，可取 scrollx, fade
   */
  @Prop({ type: String, required: false, default: "scrollx" })
  private readonly effect!: string;

  /**
   * 切换面板后的回调
   * @param current
   */
  private readonly afterChange!: (current: any) => {};

  /**
   * 切换面板前的回调
   * @param current
   */
  private readonly beforeChange!: (from: any, to: any) => {};


  /**
   * 主要分为三部分：1：滚动的组件 2：dots 3：arrow
   * 两个插槽1.自定义dots的插槽 2.自定义arrow的插槽
   */
  private carousel: any = {
    carouselDefaultSize: 0,
  };
  /**
   * 设定轮播的的大小
   */
  private getCarouselSize() {
    if (this.carouselHeight && this.carouselWidth) {
      return `width:${this.carouselWidth};height:${this.carouselHeight}`;
    } else if (this.carouselHeight && !this.carouselWidth) {
      return `height:${this.carouselHeight}`;
    } else if (this.carouselWidth && !this.carouselHeight) {
      return `width:${this.carouselWidth}`;
    } else {
      return "";
    }
  }
  /**
   * 点击上一个
   */
  private prevArrowClick(e: Event) {
    if (e) {
      e.preventDefault();
    }
    this.$emit("prev");
  }
  /**
   * 点击下一个
   */
  private nextArrowClick(e: Event) {
    if (e) {
      e.preventDefault();
    }
    console.log(this.$slots.default);
    this.$emit("next");
  }
  private render() {
    return (
      <div class="fs-carousel-container" style={this.getCarouselSize()}>
        {this.$slots.prevArrow ? (
          <div class="fs-prev-arrow-container">
            {
              <div
                class="fs-prev-arrow-box"
                onClick={(e: Event) => this.prevArrowClick(e)}
              >
                {this.$slots.prevArrow}
              </div>
            }
          </div>
        ) : (
          ""
        )}
        <div class="fs-carousel-box">{this.$slots.default}</div>
        {this.$slots.nextArrow ? (
          <div class="fs-next-arrow-container">
            {
              <div
                class="fs-next-arrow-box"
                onClick={(e: Event) => this.nextArrowClick(e)}
              >
                {this.$slots.nextArrow}
              </div>
            }
          </div>
        ) : (
          ""
        )}
        {this.$slots.dots ? <div>{this.$slots.dots}</div> : <div></div>}
      </div>
    );
  }
}


