import { defineComponent } from "@vue/composition-api";
import { VNode } from "vue/types/umd";
// @ts-ignore
import classNames from "classnames";
import { dialogProps } from "./dialogPropTypes";
import "./dialog.scss";

interface keyEvent {
  keyCode: number;
  key: string;
}

export default defineComponent({
  name: "FsDialog",
  // props: {
  //     ...dialogProps
  // },
  props: {
    ...dialogProps,
  },
  setup(props, context) {
    const emit = context.emit;
    const slots = context.slots;

    /**
     * Dialog 打开的回调
     */
    const openClick = (e: any) => {
      console.log(context.attrs);
      // 添加键盘监听事件
      if (props.closeOnPressEscape) {
        window.addEventListener("keydown", onKeydown);
      }
      emit("open", e);
    };
    /**
     * Dialog 打开动画结束时的回调
     */
    const openedClick = (e: any) => {
      emit("opened", e);
    };

    /**
     * Dialog 关闭的回调
     */
    const closeClick = (e: any) => {
      emit("close", e);
    };

    /**
     * Dialog 关闭动画结束时的回调
     */
    const closedClick = (e: any) => {
      // 移除键盘监听事件
      window.removeEventListener("keydown", onKeydown);
      emit("closed", e);
    };

    /**
     *  Dialog是否显示
     */
    const handleClose = () => {
      emit("update:visible", false);
    };

    /**
     * 监听键盘，在按住esc时关闭dialog
     */
    const onKeydown = (e: keyEvent) => {
      if (e.keyCode === 27 || e.key === "Escape") {
        handleClose();
      }
    };

    /**
     * 设定弹出框的宽度
     */
    const getDialogWidth = () => {
      return props.fullscreen || props.appendToBody ? "100%" : props.width;
    };
    /**
     *
     */
    const getClassName = (cName: string, isClass: boolean) => {
      return classNames({
        [`fs-dialog__${cName}`]: isClass,
      });
    };

    const dialogArea = (): VNode => {
      return (
        <div
          class={`fs-dialog ${getClassName("radius", props.borderRadius)}`}
          style={`width:${getDialogWidth()};margin-top:${
            props.appendToBody ? "1px" : props.top
          };`}
          onClick={(e: Event) => e.stopPropagation()}
        >
          <div class="fs-dialog__header">
            <span class="fs-dialog__title">
              {slots.title ? slots.title() : props.title}
            </span>
            {props.closeIcon && props.showClose ? (
              <button class="fs-dialog__headerbtn" onclick={handleClose}>
                <i class={props.closeIcon}></i>
              </button>
            ) : null}
          </div>
          <div class="fs-dialog__body">{slots.default()}</div>
          <div class="fs-dialog__footer">{slots.footer()}</div>
        </div>
      );
    };

    return () => {
      if (props.appendToBody) {
        return dialogArea();
      } else {
        return (
          <transition
            name="dialog-fade"
            onBeforeEnter={openClick}
            onEnter={openedClick}
            onBeforeLeave={closeClick}
            onLeave={closedClick}
          >
            {props.visible ? (
              <div
                class={getClassName("wrapper", props.modal)}
                onClick={handleClose}
              >
                {dialogArea()}
              </div>
            ) : null}
          </transition>
        );
      }
    };
  },
});
