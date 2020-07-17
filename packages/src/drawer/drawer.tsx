import { defineComponent } from "@vue/composition-api";
import { VNode } from "vue/types/umd";
// @ts-ignore
import classNames from "classnames";
import { drawerProps } from "./drawerPropTypes";
import "./drawer.scss";
import { dialogProps } from '../dialog/dialogPropTypes';

export default defineComponent({
  name: "FsDrawer",
  props: {
    ...drawerProps,
  },

  setup(props, { emit }) {
    /**
     * 用于关闭 Drawer, 该方法会调用传入的 before-close 方法
     */
    const closeDrawer = () => {};

    /**
     * Drawer 打开的回调
     */
    const openClick = (e: any) => {
      emit("open", e);
    };

    /**
     * Drawer 打开动画结束时的回调
     */
    const openedClick = (e: any) => {
      emit("opened", e);
    };
    /**
     * Drawer 关闭的回调
     */
    const closeClick = (e: any) => {
      emit("close", e);
    };
    /**
     * Drawer 关闭动画结束时的回调
     */
    const closedClick = (e: any) => {
      emit("closed", e);
    };

    const drawerArea = (): VNode => {
      return (
        <div>
          {'xxxxxxxx'}
        </div>
      );
    };

    return () => {
      return drawerArea();
    };
  },
});
