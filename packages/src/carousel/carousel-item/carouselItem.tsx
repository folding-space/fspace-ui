import {
  defineComponent,
  Ref,
  reactive,
  ref,
  watch,
  onMounted,
} from "@vue/composition-api";
import { VNode } from "vue/types/umd";
// @ts-ignore
import classNames from "classnames";
import './carouselItem.scss'
export default defineComponent({
  name: "FsCarousel",
  props: {},
  setup(props, context) {
    return () => {
      return <div class="carousel-item"></div>;
    };
  },
});
