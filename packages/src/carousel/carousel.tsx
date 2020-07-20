import {
  defineComponent,
  reactive,
  onMounted,
  onBeforeMount,
} from "@vue/composition-api";
import { VNode } from "vue/types/umd";
// @ts-ignore
import classNames from "classnames";
import { carouselProps } from "./carouselPropTypes";
import "./carousel.scss";

interface keyEvent {
  keyCode: number;
  key: string;
}
/**
 * 主要分为三部分：1：滚动的组件 2：dots 3：arrow
 * 一、滚动组件，监听鼠标事件：mouseenter， mouseover， mouseleave，用来控制dots和arrow的显示，
 * mouseenter或者mouseover显示，mouseleave就隐藏
 * 二、下面的两个组件共有事件——控制滚动组件的滚动
 * dots写两种样式——圆点和横线，传入选择参数，默认圆点
 * 两个插槽1.自定义arrow的插槽next、prev
 */
export default defineComponent({
  name: "FsCarousel",
  props: {
    ...carouselProps,
  },
  setup(props, context) {
    const { emit, slots } = context;
    /** 获取轮播滚动组件的数量 */
    const dotsNumber = reactive({ count: 0 });
    /** 是否显示dots和箭头 */
    const isShowDotsAndArrow = reactive({ count: false });
    /** 显示的滚动组件的key */
    const carouselKey = reactive({ count: 0 });
    /**
     * 获取滚动的dot的数量/滚动组件的数量
     */
    const getCarouselDotsNumber = () => {
      console.log(slots.default());
      slots.default().forEach((item: VNode) => {
        if (item.tag) {
          if (item.tag) {
            dotsNumber.count++;
          }
        }
      });
    };

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

      if (carouselKey.count === 0) {
        carouselKey.count = dotsNumber.count - 1;
      } else {
        carouselKey.count--;
      }
      console.log(carouselKey.count);
      emit("prev");
    };
    /**
     * 点击下一个
     */
    const nextArrowClick = (e: Event) => {
      if (e) {
        e.preventDefault();
      }
      if (carouselKey.count === dotsNumber.count - 1) {
        carouselKey.count = 0;
      } else {
        carouselKey.count++;
      }
      emit("next");
    };

    /**
     * dots的样式
     */
    const spotOrLine = (): VNode => {
      let dotsArray = [];
      if (props.spotOrLine === "spot") {
        for (let i = 0; i < dotsNumber.count; i++) {
          dotsArray.push(
            <div onClick={(e: Event) => dotsClick(e, i)}>
              <span
                class="fs-carousel-dots-spot"
                key={i}
                style={carouselKey.count === i ? `background-color:white` : ""}
              ></span>
            </div>
          );
        }
      } else if (props.spotOrLine === "line") {
        for (let i = 0; i < dotsNumber.count; i++) {
          dotsArray.push(
            <div onClick={(e: Event) => dotsClick(e, i)}>
              <span
                class="fs-carousel-dots-line"
                key={i}
                style={carouselKey.count === i ? `background-color:white` : ""}
              ></span>
            </div>
          );
        }
      }
      // @ts-ignore
      return dotsArray;
    };
    /**
     * 点击dots的时候控制轮播的播放
     * @param index 点击的dots的key值
     */
    const dotsClick = (e: Event, index: any) => {
      if (e) {
        e.preventDefault();
      }
      carouselKey.count = index;
      console.log(slots.default());
    };
    /**
     * 鼠标进入组件或者在组件上的时候展示dots和arrow
     */
    const showDotsAndArrowFunc = () => {
      isShowDotsAndArrow.count = true;
    };
    /**
     * 鼠标离开组件的时候隐藏dots和arrow
     */
    const hideDotsAndArrowFunc = () => {
      isShowDotsAndArrow.count = false;
    };
    onMounted(() => {
      getCarouselDotsNumber();
      let itemIndex = 0;
      slots.default().forEach((item: any, index) => {
        if (item.tag) {
          item.key = itemIndex;
          itemIndex++;
        }
      });
    });
    onBeforeMount(()=>{
      setInterval(() => {
        if (!isShowDotsAndArrow.count) {
          if (carouselKey.count === dotsNumber.count - 1) {
            carouselKey.count = 0;
          } else {
            carouselKey.count++;
          }
        }
      }, 2000);
    })
    

    return () => {
      return (
        <div
          class="fs-carousel-container"
          style={getCarouselSize()}
          onMouseover={() => showDotsAndArrowFunc()}
          onMouseenter={() => showDotsAndArrowFunc()}
          onMouseleave={() => hideDotsAndArrowFunc()}
        >
          {isShowDotsAndArrow.count ? (
            <div class="fs-prev-arrow-container">
              <div
                class="fs-prev-arrow-box"
                onClick={(e: Event) => prevArrowClick(e)}
              >
                <span class="iconfont" style="font-size:18px;font-weight:600">
                  &#xe66e;
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
          {slots.default().map((item: any) => {
            return (
              <transition name="carousel-fade">
                {item.key === carouselKey.count ? (
                  <div class="fs-carousel-box">{item}</div>
                ) : null}
              </transition>
            );
          })}
          {isShowDotsAndArrow.count ? (
            <div class="fs-next-arrow-container">
              <div
                class="fs-next-arrow-box"
                onClick={(e: Event) => nextArrowClick(e)}
              >
                <span class="iconfont" style="font-size:18px;font-weight:600">
                  &#xe670;
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
          {isShowDotsAndArrow.count ? (
            <div class="fs-carousel-dots-box">{spotOrLine()}</div>
          ) : (
            ""
          )}
        </div>
      );
    };
  },
});
