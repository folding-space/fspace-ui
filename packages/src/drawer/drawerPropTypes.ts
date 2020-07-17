import { PropTypes } from "../utils/vue-types";

const drawerProps = {
  /**
   * Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true,默认为false
   */
  appendToBody: PropTypes.bool,
  /**
   * Drawer 是否可以通过按下 ESC 关闭 Drawer必须指定该属性并赋值为 true,默认为false
   */
  closeOnPressEscape: PropTypes.bool,

  /**
   * 关闭前的回调，会暂停 Dialog 的关闭
   * @param done 用于关闭 Dialog
   */
  beforeClose: PropTypes.any,

  /**
   *  Drawer 的自定义类名
   */
  customClass: PropTypes.string,

  /**
   * 控制是否在关闭 Drawer 之后将子元素全部销毁,默认值是false
   */
  destroyOnClose: PropTypes.bool,

  /**
   * 是否需要遮罩层,默认值是false
   */
  modal: PropTypes.bool,

  /**
   * 遮罩层是否插入至 body 元素上,则遮罩层会插入至 Drawer 的父元素上,默认值是false
   */
  modalAppendToBody: PropTypes.bool,

  /**
   * Drawer 打开的方向
   * 只能填着四个值 rtl / ltr / ttb / btt
   */
  direction: PropTypes.string,

  /**
   * 是否显示关闭按钮,默认值是false
   */
  showClose: PropTypes.bool,

  /**
   * Drawer 窗体的大小,
   * 当使用 number 类型时, 以像素为单位,
   * 当使用 string 类型时, 请传入 'x%',
   * 否则便会以 number 类型解释
   */
  size: PropTypes.number || PropTypes.string,

  /**
   * Drawer 的标题，也可通过具名 slot 传入
   */
  title: PropTypes.string,

  /**
   * 是否显示 Drawer，支持 .sync 修饰符
   */
  visible: PropTypes.bool,

  /**
   * 点击遮罩层是否可以关闭 Drawer
   */
  wrapperClosable: PropTypes.bool,

  /**
   * 控制是否显示 header 栏,
   * 默认为 true,
   * 当此项为 false 时,title attribute 和 title slot 均不生效
   */
  withHeader: PropTypes.bool,
};

export { drawerProps };
