import { defineComponent,Ref, reactive,ref } from "@vue/composition-api";
import { VNode } from "vue/types/umd";
// @ts-ignore
import classNames from "classnames";
import { carouselProps } from "./carouselPropTypes";
import "./carousel.scss";

interface keyEvent {
  keyCode: number;
  key: string;
}

export default defineComponent({
  name: "FsCarousel",
  props: {
    ...carouselProps,
  },
  setup(props, context) {
    const emit = context.emit;
    const slots = context.slots;
    /**
     * 主要分为三部分：1：滚动的组件 2：dots 3：arrow
     * 两个插槽1.自定义dots的插槽 2.自定义arrow的插槽
     */

    /**
     * 获取滚动的dot的数量
     */
    const getCarouselDotsNumber =()=>{
      return slots.default()
    }
    /**
     * 设定轮播的的大小
     */
    const getCarouselSize = () => {
      if (props.carouselHeight && props.carouselWidth) {
        return `width:${props.carouselWidth};height:${props.carouselHeight}`;
      } else if (props.carouselHeight && !props.carouselWidth) {
        return `height:${props.carouselHeight}`;
      } else if (props.carouselWidth && !props.carouselHeight) {
        return `width:${props.carouselWidth}`;
      } else {
        return "";
      }
    };
    /**
     * 点击上一个
     */
    const prevArrowClick = (e: Event) => {
      if (e) {
        e.preventDefault();
      }
      emit("prev");
    };
    /**
     * 点击下一个
     */
    const nextArrowClick = (e: Event) => {
      if (e) {
        e.preventDefault();
      }
      console.log(slots.dots(), "slots.dots");
      emit("next");
    };
    
    return () => {
      return (
        <div class="fs-carousel-container" style={getCarouselSize()}>
          {slots.prevArrow ? (
            <div class="fs-prev-arrow-container">
              {
                <div
                  class="fs-prev-arrow-box"
                  onClick={(e: Event) => prevArrowClick(e)}
                >
                  {slots.prevArrow()}
                </div>
              }
            </div>
          ) : (
            ""
          )}
          <div class="fs-carousel-box">{slots.default()}</div>
          {slots.nextArrow ? (
            <div class="fs-next-arrow-container">
              {
                <div
                  class="fs-next-arrow-box"
                  onClick={(e: Event) => nextArrowClick(e)}
                >
                  {slots.nextArrow()}
                </div>
              }
            </div>
          ) : (
            ""
          )}
          {
            <div>
              {getCarouselDotsNumber().forEach((item, index) => {
                return <div key={`dots${index}`}>{slots.dots()}</div>;
              })}
            </div>
          }
        </div>
      );
    };
  },
});
